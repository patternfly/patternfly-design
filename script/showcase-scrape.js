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

const pfExceptions = [ 'accordions.html',
  'application-launcher-nav-horizontal.html',
  'application-launcher-nav-vertical.html',
  'badges.html',
  'basic.html',
  'bootstrap-combobox.html',
  'bootstrap-select.html',
  'bootstrap-switch.html',
  'bootstrap-touchspin.html',
  'bootstrap-treeview-2.html',
  'bootstrap-treeview.html',
  'buttons.html',
  'card-view-card-variations.html',
  'card-view-single-select.html',
  'code.html',
  'dropdowns.html',
  'form.html',
  'icons.html',
  'infotip.html',
  'labels.html',
  'list-group.html',
  'list-pf.html',
  'list-view-compound-expansion.html',
  'list-view-rows.html',
  'list-view.html',
  'modals.html',
  'navbar.html',
  'notification-drawer-horizontal-nav.html',
  'pagination-card-view.html',
  'pagination-list-view.html',
  'pagination-table-view.html',
  'panels.html',
  'progress-bars.html',
  'search.html',
  'spinner.html',
  'tab.html',
  'table-view-columns.html',
  'table-view-navbar.html',
  'tables.html',
  'tabs.html',
  'tooltip.html',
  'typography-2.html',
  'typography.html',
  'vertical-navigation-primary-only.html',
  'vertical-navigation-with-badges.html',
  'vertical-navigation-with-tertiary-no-icons.html',
  'vertical-navigation-with-tertiary-pins.html'
].map(url => URL.parse(url));

function getHtml(url) {
  return Rx.Observable.create(observer => {
    request(url, function (error, response, body) {
      if (!error) {
        observer.onNext(body);
        observer.onCompleted();
      } else {
        observer.onError(error);
      }
    });
  })

}

function readHtml(filename) {
  return readFile('./script/data/apf.html', 'utf8');
}

function parseShowcase(html) {
  const $ = cheerio.load(html);
  return $('a').map((i, elem) => {
    return $(elem).attr('href');
  })
  .get()
  .map(url => URL.parse(url));
}

const siteFrontMatter$ = patternWalk.observable
  .mergeMap(family => {
    return family.patterns.map(pattern => {
      const site = pattern.files.get('site');
      if (site && site.frontmatter) {
        return site.frontmatter;
      }
    })
  })
  .filter(fm => !!fm)
  ;

const apfDiff$ = Rx.Observable.forkJoin(
  // http://www.patternfly.org/angular-patternfly/ needs to be rendered by a browser
  // as a workaround I saved the browser output to a files
  // TODO: use headless chrome to render the showcase results and automate this
  // getHtml('http://www.patternfly.org/angular-patternfly/')
  readHtml('apf.html')
    .map(html => parseShowcase(html)
      .filter(url =>
        url.pathname.startsWith('/angular-patternfly/') &&
        url.hash && url.hash.startsWith('#/api/') &&
        url.hash.indexOf(':') > 0
      )
    ),
  siteFrontMatter$
    .map(fm => fm.impl_angular)
    .filter(url => !!url)
    .map(url => URL.parse(url))
    .toArray()
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
  console.log('----------------');
  console.log(`A-PF showcaseUrls: ${showcaseUrls.length}`);
  console.log(`siteUrls: ${siteUrls.length}`);
  console.log(`A-PF exceptions: ${apfExceptions.length}`);
  console.log(`diff: ${diff.length}`);
  return diff.map(url => decodeURIComponent(url.href)).sort();
})
.do(function(diff) {
  console.log(diff);
});

const pfDiff$ = Rx.Observable.forkJoin(
  getHtml('http://patternfly.github.io/patternfly-3/tests/index.html')
    .map(html => parseShowcase(html).filter(url => ! url.hostname)),
  siteFrontMatter$
    .map(fm => fm.impl_jquery)
    .filter(url => !!url)
    .map(url => URL.parse(url))
    .toArray()
)
.map(results => {
  const showcaseUrls = results[0];
  const siteUrls = results[1];
  const diff = showcaseUrls
    .filter(showcaseUrl => {
      return !siteUrls.some(siteUrl => {
        // console.log(siteUrl.pathname, '/patternfly/patternfly/master-dist/dist/tests/' + showcaseUrl.pathname)
        return siteUrl.pathname === '/patternfly/patternfly/master-dist/dist/tests/' + showcaseUrl.pathname;
      });
    })
    .filter(showcaseUrl => {
      return !pfExceptions.some(exceptionUrl => {
        return exceptionUrl.pathname === '/patternfly/patternfly/master-dist/dist/tests/' + showcaseUrl.pathname;
      });
    });
  console.log('----------------');
  console.log(`PF showcaseUrls: ${showcaseUrls.length}`);
  console.log(`siteUrls: ${siteUrls.length}`);
  console.log(`PF exceptions: ${pfExceptions.length}`);
  console.log(`diff: ${diff.length}`);
  return diff.map(url => decodeURIComponent(url.href)).sort();
})
.do(function(diff) {
  console.log(diff);
});


Rx.Observable.forkJoin(
  apfDiff$,
  pfDiff$
)
.subscribe(function(diff) {
  console.log('Done.');
}, function(error) {
  throw error;
});
