#!/usr/bin/env node
'use strict';

var Rx = require('rx'),
    fs = require('fs'),
    path = require('path'),
    handlebars = require('handlebars'),
    readdir = Rx.Observable.fromNodeCallback(fs.readdir),
    readFile = Rx.Observable.fromNodeCallback(fs.readFile),
    writeFile = Rx.Observable.fromNodeCallback(fs.writeFile),
    mkdir = Rx.Observable.fromNodeCallback(fs.mkdir),
    exists = Rx.Observable.fromCallback(fs.exists),
    filesToCheck = Rx.Observable.from(['design/design.md', 'design/overview.md', 'site.md']);

readdir('pattern-library')
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
  return readdir('pattern-library/'+family.name)
  .flatMap(function(patternNames) {
    return patternNames;
  })
  .flatMap(function(patternName) {
    var pattern = {
      name: patternName,
      files: []
    }
    family.patterns.push(pattern);
    return filesToCheck.flatMap(function(fileToCheck) {
      var file = {
        name: path.join('pattern-library', family.name, pattern.name, fileToCheck)
      }
      pattern.files.push(file);
      return exists(file.name)
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
.toArray()
.flatMap(function(families) {
  return readFile('./script/status.template.hbs', 'utf8')
  .map(function(template) {
    var hbs = handlebars.compile(template);
    var data = {
      families : families
    }
    var html = hbs(data);
    return html
  })
})
.flatMap(function(html) {
  return writeFile('./publish/status/index.html', html);
})
.subscribe(function() {
  console.log('Generated the status page');
}, function(error) {
  throw error;
});
