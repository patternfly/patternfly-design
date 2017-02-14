#!/usr/bin/env node
'use strict';

var Rx = require('rx'),
    fs = require('fs'),
    path = require('path'),
    handlebars = require('handlebars'),
    patternWalk = require('./pattern-walk'),
    readFile = Rx.Observable.fromNodeCallback(fs.readFile),
    writeFile = Rx.Observable.fromNodeCallback(fs.writeFile),
    mkdir = Rx.Observable.fromNodeCallback(fs.mkdir),
    exists = Rx.Observable.fromCallback(fs.exists),
    patternFileRe = new RegExp(/(overview|design):\s(.*)/);

patternWalk.observable
.flatMap(function(family) {
  return family.patterns;
})
.flatMap(function(pattern) {
  return exists(pattern.files.get('site').path)
  .flatMap(function(siteFileExists) {
    if (siteFileExists) {
      return readFile(pattern.files.get('site').path, 'utf8')
      .flatMap(function(contents) {
        return Rx.Observable.from(contents.split(/\n/))
        .filter(function(line) {
          let match = patternFileRe.exec(line);
          return match && match[2] != 'false'
        })
        .flatMap(function (line) {
          let match = patternFileRe.exec(line);
          let includePath = match[2];
          let result = {
            siteFile: pattern.files.get('site').path,
            includeType: match[1],
            includePath: includePath,
          }
          return exists(includePath)
          .map(function(includeFileExists) {
            result.exists = includeFileExists;
            return result;
          });
        });
      })
    } else {
      return Rx.Observable.empty;
    }
  })
})
.filter(function(result) {
  return result && !result.exists;
})
.toArray()
.tap(function(results) {
  if (results.length != 0) {
    var errorTemplate = `{{#each results}}
Error: This site.md file references a invalid {{includeType}}.md file:
 site.md: {{siteFile}}
 {{includeType}}: {{includePath}}

{{/each}}`;
    let hbs = handlebars.compile(errorTemplate);
    let errorMessage = hbs({results: results});
    throw errorMessage;
  }
})
.subscribe(function(results) {
  console.log('Success verifying the pattern includes');
}, function(error) {
  console.error('Error verifying the pattern includes');
  throw error;
});
