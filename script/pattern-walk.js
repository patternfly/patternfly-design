#!/usr/bin/env node
'use strict';

var Rx = require('rx'),
    fs = require('fs'),
    path = require('path'),
    readdir = Rx.Observable.fromNodeCallback(fs.readdir),
    readFile = Rx.Observable.fromNodeCallback(fs.readFile),
    exists = Rx.Observable.fromCallback(fs.exists),
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
.map(function(familyName) {
  return {
    name: familyName,
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
      var key = entry[0], fileToCheck = entry[1];
      var file = {
        patternFile: fileToCheck,
        path: path.join('pattern-library', family.name, pattern.name, fileToCheck.path)
      }
      pattern.files.set(key, file);
      return exists(file.path)
      .map(function(fileExists) {
        file.exists = fileExists;
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
