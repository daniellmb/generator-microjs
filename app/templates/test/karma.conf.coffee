###
@file

## Responsibilities
- configure karma for <%= testFramework %> testing

Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> v<%= pkg.version %>

@author <%= realname %> <<%= email %>>
###

module.exports = (config) ->
  config.set
    ###
    Path used to resolve file paths
    ###
    basePath: '../'

    ###
    Test results reporter to use:
    dots, progress, nyan, story, coverage etc.
    ###
    reporters: ['dots']

    ###
    Test pre-processors
    ###
    preprocessors:
      '<%= baseFileName %>.coffee': ['coffee']
      'test/spec/*.spec.coffee': ['coffee']

    ###
    Locally installed browsers
    Chrome, ChromeCanary, PhantomJS, Firefox, Opera, IE, Safari, iOS etc.
    ###
    browsers: ['PhantomJS']

    ###
    Enable / disable watching file and executing tests whenever any file changes
    ###
    autoWatch: false

    ###
    Continuous Integration mode: if true, it capture browsers, run tests and exit
    ###
    singleRun: true

    ###
    Report slow running tests, time in ms
    ###
    reportSlowerThan: 250

    ###
    If browser does not capture in given timeout [ms], kill it
    Increasing timeout in case connection in Travis CI is slow
    ###
    captureTimeout: 100000

    ###
    Logging Level:
    DISABLE, ERROR, WARN, INFO, DEBUG
    ###
    logLevel: 'INFO'

    ###
    Test framework to use:
    jasmine, mocha, qunit etc.
    ###
    frameworks: ['<%= testFramework %>'<% if (testFramework === 'mocha') {  %>, 'chai', 'sinon'<% } %>]