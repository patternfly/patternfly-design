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
  let siteFile = pattern.files.get('site');
  if (siteFile.status === 'present') {
    return Rx.Observable.from(['overview', 'design'])
    .flatMap(function (key) {
      let includePath = siteFile.frontmatter[key]
      if (!includePath) {
        return Rx.Observable.empty;
      };
      let result = {
        siteFile: siteFile.path,
        includeType: key,
        includePath: includePath,
      }
      return exists(includePath)
      .map(function(includeFileExists) {
        result.exists = includeFileExists;
        return result;
      });
    });
  } else {
    return Rx.Observable.empty;
  }
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
