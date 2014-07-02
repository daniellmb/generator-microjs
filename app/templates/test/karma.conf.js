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
    captureTimeout: 100000,

    // logging level
    // LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_INFO, LOG_DEBUG
    logLevel: 'LOG_INFO'
  });
};