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
          return exec(`git log --format=%aD -n 1 ${file.path}`)
          .flatMap(function(stdout) {
            file.dateChanged = new Date(stdout[0]);
            file.dateChangedFormatted = dateFormat(file.dateChanged, 'dddd, mmmm dS')
            if (now - file.dateChanged.getTime() < 7*24*3600*1000) {
              file.status = 'changed'
              return exec(`git log --format=%aD ${file.path} | tail -1`)
              .map(function (stdout) {
                file.dateCreated = new Date(stdout[0]);
                if (now - file.dateCreated.getTime() < 7*24*3600*1000) {
                  file.status = 'new'
                }
              });
            } else {
              return Rx.Observable.empty;
            }
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
