#!/usr/bin/env node
'use strict';

const Rx = require('rx'),
      request = require('request'),
      fs = require('fs'),
      readFile = Rx.Observable.fromNodeCallback(fs.readFile),
      patternWalk = require('./pattern-walk'),
      cheerio = require('cheerio'),
      URL = require('url');

const apfExceptions = [
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.views.pfViewUtils',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.autofocus:pfFocused',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.canvas.directive:pfCanvasEditor',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.card.component:pfInfoStatusCard',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.charts.component:pfDonutPctChart',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.charts.component:pfTopology',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.charts.directive:pfTrendsChart',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.charts.directive:pfUtilizationTrendChart',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.filters.component:pfFilterFields',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.filters.component:pfFilterPanel',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.filters.component:pfFilterPanelResults',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.filters.component:pfFilterResults',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.form.directive:pfFormGroup',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.form.directive:pfRemainingCharsCount',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.navigation.component:pfVerticalNavigation - Router',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.notification.component:pfNotificationList',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.notification.component:pfToastNotificationList',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.select.component:pfSelect',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.select.directive:pfBootstrapSelect',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.table.component:pfTableView - with Toolbar',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.utils.directive:pfTransclude',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.utils:pfFixedAccordion',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.wizard.component:pfWizardReviewPage',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.wizard.component:pfWizardStep',
  'http://www.patternfly.org/angular-patternfly/#/api/patternfly.wizard.component:pfWizardSubstep'
].map(url => URL.parse(url));

function getHtml() {
  return new Promise((resolve, reject) => {
    request("http://www.patternfly.org/angular-patternfly/", function (error, response, body) {
      if (!error) {
        resolve(body);
      } else {
        reject(error);
      }
    });
  })
}

function readHtml(filename) {
  return readFile('./script/data/apf.html', 'utf8');
}

function parseApfShowcase(html) {
  const $ = cheerio.load(html);
  // const hrefs = $('a').each((i, elem) => {
  //   console.log($(elem).attr('href'))
  // });
  const urls = $('a').map((i, elem) => {
    return $(elem).attr('href');
  }).get()
  .filter(url => {
    return url.startsWith('http://www.patternfly.org/angular-patternfly/#/api/');
  })
  .map(url => URL.parse(url))
  .filter(url => url.hash.indexOf(':') > 0);
  return urls;
}

const siteUrls$ = patternWalk.observable
  .toArray()
  .map(function(families) {
    return families.map(family => {
      return family.patterns.map(pattern => {
        const site = pattern.files.get('site');
        if (site && site.frontmatter) {
          return site.frontmatter.impl_angular;
        }
      })
    })
    .reduce((prev, curr) => {
      return prev.concat(curr);
    })
    .filter(url => !!url)
    .map(url => URL.parse(url))
  });

Rx.Observable.forkJoin(
  readHtml('apf.html').map(parseApfShowcase),
  siteUrls$
)
.map(results => {
  const showcaseUrls = results[0];
  const siteUrls = results[1];
  const diff = showcaseUrls
    .filter(showcaseUrl => {
      return !siteUrls.some(siteUrl => {
        return siteUrl.hash === showcaseUrl.hash;
      });
    })
    .filter(showcaseUrl => {
      return !apfExceptions.some(exceptionUrl => {
        return exceptionUrl.hash === showcaseUrl.hash;
      });
    });
  console.log(`showcaseUrls: ${showcaseUrls.length}`);
  console.log(`siteUrls: ${siteUrls.length}`);
  console.log(`exceptions: ${apfExceptions.length}`);
  console.log(`diff: ${diff.length}`);
  return diff.map(url => decodeURIComponent(url.href)).sort();
})
.subscribe(function(diff) {
  console.log(diff);
}, function(error) {
  throw error;
});
