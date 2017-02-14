#!/usr/bin/env node
'use strict';

var Rx = require('rx'),
    fs = require('fs'),
    path = require('path'),
    dateFormat = require('dateformat'),
    readdir = Rx.Observable.fromNodeCallback(fs.readdir),
    readFile = Rx.Observable.fromNodeCallback(fs.readFile),
    stat = Rx.Observable.fromNodeCallback(fs.stat),
    exists = Rx.Observable.fromCallback(fs.exists),
    exec = Rx.Observable.fromNodeCallback(require('child_process').exec),
    patternFiles = new Map([
      ['overview', {
        name: 'overview.md',
        path: 'design/overview.md'
      }],
      ['design', {
        name: 'design.md',
        path: 'design/design.md'
      }],
      ['site', {
        name: 'site.md',
        path: 'site.md'
      }]
    ]);

var familyObservable = readdir('pattern-library')
.flatMap(function(familyNames) {
  return familyNames;
})
.flatMap(function(familyName) {
  return stat(path.join('pattern-library/', familyName))
  .map(function(stats) {
    return {
      familyName: familyName,
      stats: stats
    };
  });
})
.filter(function(familyStats) {
  return familyStats.stats.isDirectory();
})
.map(function(familyStats) {
  return {
    name: familyStats.familyName,
    patterns: []
  }
})
.flatMap(function(family) {
  return readdir(path.join('pattern-library/', family.name))
  .flatMap(function(patternNames) {
    return patternNames;
  })
  .flatMap(function(patternName) {
    var pattern = {
      name: patternName,
      files: new Map()
    }
    family.patterns.push(pattern);
    return Rx.Observable.from(patternFiles).flatMap(function(entry) {
      var now = new Date().getTime();
      var key = entry[0], fileToCheck = entry[1];
      var file = {
        patternFile: fileToCheck,
        path: path.join('pattern-library', family.name, pattern.name, fileToCheck.path)
      }
      pattern.files.set(key, file);
      return exists(file.path)
      .flatMap(function(fileExists) {
        if (fileExists) {
          file.status = 'present'
          return exec(`git log --format=%aD ${file.path}`)
          .map(function(stdout) {
            let commits = stdout[0].split('\n').filter(function(commit) {
              return commit.length > 0;
            });
            file.dateChanged = new Date(commits[0]);
            file.dateChangedFormatted = dateFormat(file.dateChanged, 'mmmm dS yyyy');
            file.dateCreated = new Date(commits[commits.length - 1]);
            file.dateCreatedFormatted = dateFormat(file.dateCreated, 'mmmm dS yyyy');
          });
        } else {
          file.status = 'missing';
          return Rx.Observable.empty;
        }
      })
    })
  })
  .toArray()
  .map(function() {
    return family;
  })
})
.toArray()
.flatMap(function(families) {
  families.sort(function compare(famA, famB) {
    if (famA.name < famB.name) {
      return -1;
    }
    if (famA.name > famB.name) {
      return 1;
    }
    // must be equal
    return 0;
  })
  return families;
})

module.exports = {
  observable: familyObservable,
  patternFiles: patternFiles
};
