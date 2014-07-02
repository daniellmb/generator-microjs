/**
 * @file
 *
 * ### Responsibilities
 * - configure grunt-karma for <%= testFramework %> testing
 *
 * Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> v<%= pkg.version %>
 *
 * @author <%= realname %> <<%= email %>>
 */
'use strict';

module.exports = function (config) {
  config.set({

    /*
     The root path location that will be used to resolve all relative paths defined in files and exclude
     */
    basePath: '../',

    /*
     The files array determines which files are included in the browser and served by Karma.
     */
    files: [

      // equal to {pattern: 'test/unit/*.spec.js', watched: true, served: true, included: true}
      'test/spec/*.spec.js'
    ],

    /*
     Test results reporter to use:
     dots, progress, nyan, story
     */
    reporters: ['dots'],

    /*
     Test framework to use
     */
    frameworks: ['<%= testFramework %>'<% if (testFramework === 'mocha') {  %>, 'chai', 'sinon'<% } %>],

    /*
     locally installed browsers
     Chrome, ChromeCanary, PhantomJS, Firefox, Opera, IE, Safari, iOS
     */
    browsers: ['PhantomJS'],

    // code coverage settings
    coverage: {
      // html, lcovonly, lcov, cobertura, text-summary, text, teamcity, clover
      reporters: ['html', 'text', 'json']
    },

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Continuous Integration mode: if true, it capture browsers, run tests and exit
    singleRun: true,

    // report slow running tests, time in ms
    reportSlowerThan: 250,

    // If browser does not capture in given timeout [ms], kill it
    // Increase timeout in case connection in CI is slow
    captureTimeout: 100000
  });
};