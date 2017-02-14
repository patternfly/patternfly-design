#!/usr/bin/env node
'use strict';

var Rx = require('rx'),
    fs = require('fs'),
    path = require('path'),
    handlebars = require('handlebars'),
    helpers = require('handlebars-helpers')(),
    patternWalk = require('./pattern-walk'),
    readFile = Rx.Observable.fromNodeCallback(fs.readFile),
    writeFile = Rx.Observable.fromNodeCallback(fs.writeFile),
    mkdir = Rx.Observable.fromNodeCallback(fs.mkdir),
    exists = Rx.Observable.fromCallback(fs.exists);

handlebars.registerHelper('eachInMap', function ( map, block ) {
  var out = '';
  Array.from(map.keys()).map(function(key) {
    out += block.fn({key: key, value: map.get(key)});
  });
  return out;
} );

patternWalk.observable
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
