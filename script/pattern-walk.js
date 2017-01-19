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
      ['design', {
        name: 'design.md',
        path: 'design/design.md'
      }],
      ['overview', {
        name: 'overview.md',
        path: 'design/overview.md'
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
        file.exists = fileExists;
        if (fileExists) {
          return stat(file.path)
          .flatMap(function(fileStats) {
            let delta = now - fileStats.mtime.getTime();
            file.changed = {};
            file.changed.isChanged = delta < 7*24*3600*1000;
            file.changed.dateFormatted = dateFormat(fileStats.mtime, 'dddd, mmmm dS')
            file.changed.cssClass = 'changed';
            if (file.changed.isChanged) {
              return exec(`git log --format=%aD ${file.path} | tail -1`)
              .map(function (stdout) {
                let createdDate = new Date(stdout[0])
                let delta = now - createdDate.getTime();
                file.changed.isNew = delta < 7*24*3600*1000;
                if (file.changed.isNew) {
                  file.changed.cssClass = 'new';
                }
              });
            } else {
              return Rx.Observable.from([]);
            }
          });
        } else {
          return Rx.Observable.from([]);
        }
      })
    })
  })
  .toArray()
  .map(function() {
    return family;
  })
})

module.exports = {
  observable: familyObservable,
  patternFiles: patternFiles
};
