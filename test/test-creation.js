/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var _ = require('underscore');
var output = require('./mute');

global.YEOMAN_MUTE = true;

describe('microjs generator', function () {

  var options, promptMocks, projName = 'test-proj', testDir = path.join(__dirname, 'temp');

  function checkContents(file, contents) {
    return [file, new RegExp(contents)];
  }

  beforeEach(function (done) {
    // mock command line options
    options = {
      'skip-install-message': true,
      'skip-install': true,
      'skip-welcome-message': true,
      'skip-message': true
    };

    // mock generator prompts
    promptMocks = {
      'githubUser': 'daniellmb',
      'generatorName': 'temp',
      'projName': projName,
      'taskFramework': 'gulp',
      'testFramework': 'jasmine'
    };

    // create generator instance
    helpers.testDirectory(testDir, function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('microjs:app', [
        '../../app'
      ]);

      // mock generator prompts
      helpers.mockPrompt(this.app, promptMocks);

      // mock command line options
      _.extend(this.app.options, options);

      // Prevent Yeoman writes while the generator runs
      // then re-enable them when it's finished to see the test results
      this.app.on('start', output.mute);
      this.app.on('end', output.unmute);

      done();

    }.bind(this));
  });

  describe('when using the default settings', function () {
    it('should create the expected files', function (done) {

      // the expected files should exist
      var expectedFiles = [
        'test/karma.conf.js',
        'test/spec/' + projName + '.spec.js',
        '.editorconfig',
        '.npmignore',
        '.gitattributes',
        '.gitignore',
        '.jshintrc',
        'bower.json',
        'gulpfile.js',
        'package.json',
        'README.md',
        projName + '.js',
        projName + '.min.js',
        projName + '.min.js.map'
      ];

      // the unexpected files should not exist
      var unexpectedFiles = [
        'gruntfile.js',
        projName + '.coffee'
      ];

      // run the generator
      this.app.run({}, function () {

        // check for expected files
        helpers.assertFile(expectedFiles);

        // check for unexpected files
        helpers.assertNoFile(unexpectedFiles);

        done();
      });
    });

    describe('.jshintrc', function () {
      var file = '.jshintrc';

      it('should contain the correct contents', function (done) {

        // the file should have the expected content
        var expectedContent = [
          checkContents(file, 'expect'),
          checkContents(file, 'spyOn')
        ];

        // the file should not have unexpected content
        var unexpectedContent = [
          checkContents(file, 'setup'),
          checkContents(file, 'teardown')
        ];

        // run the generator
        this.app.run({}, function () {

          // check for expected file contents
          helpers.assertFileContent(expectedContent);

          // check for unexpected file contents
          helpers.assertNoFileContent(unexpectedContent);

          done();
        });
      });
    });

    describe('bower.json', function () {
      var file = 'bower.json';

      it('should contain the correct contents', function (done) {

        // the file should have the expected content
        var expectedContent = [
          checkContents(file, '"name": "' + projName + '"')
        ];

        // run the generator
        this.app.run({}, function () {

          // check for expected file contents
          helpers.assertFileContent(expectedContent);

          done();
        });
      });
    });

    describe('gulpfile.js', function () {
      var file = 'gulpfile.js';

      it('should contain the correct contents', function (done) {

        // the file should have the expected content
        var expectedContent = [
          checkContents(file, 'source = \'' + projName + '.js\''),
          checkContents(file, 'sourceMin = \'' + projName + '.min.js\''),
          checkContents(file, 'gulp.src\\(sourceAndSpecs'),
          checkContents(file, 'pipe\\(rename\\(sourceMin')
        ];

        // run the generator
        this.app.run({}, function () {

          // check for expected file contents
          helpers.assertFileContent(expectedContent);

          done();
        });
      });
    });

    describe('package.json', function () {
      var file = 'package.json';

      it('should contain the correct contents', function (done) {

        // the file should have the expected content
        var expectedContent = [
          checkContents(file, '"name": "' + projName + '"'),
          checkContents(file, 'gulp'),
          checkContents(file, 'jasmine')
        ];

        // the file should not have unexpected content
        var unexpectedContent = [
          checkContents(file, 'grunt'),
          checkContents(file, 'mocha')
        ];

        // run the generator
        this.app.run({}, function () {

          // check for expected file contents
          helpers.assertFileContent(expectedContent);

          // check for unexpected file contents
          helpers.assertNoFileContent(unexpectedContent);

          done();
        });
      });
    });

    describe('README.md', function () {
      var file = 'README.md';

      it('should contain the correct contents', function (done) {

        // the file should have the expected content
        var expectedContent = [
          checkContents(file, '# ' + projName)
        ];

        // the file should not have unexpected content
        var unexpectedContent = [
          checkContents(file, 'CoffeeScript')
        ];

        // run the generator
        this.app.run({}, function () {

          // check for expected file contents
          helpers.assertFileContent(expectedContent);

          // check for unexpected file contents
          helpers.assertNoFileContent(unexpectedContent);

          done();
        });
      });
    });

    describe(projName + '.js', function () {
      var file = projName + '.js';

      it('should contain the correct contents', function (done) {

        // the file should have the expected content
        var expectedContent = [
          checkContents(file, '@file ' + projName + ' was created using generator-microjs'),
          checkContents(file, '@author Daniel Lamb <dlamb.open.source@gmail.com>')
        ];

        // run the generator
        this.app.run({}, function () {

          // check for expected file contents
          helpers.assertFileContent(expectedContent);

          done();
        });
      });
    });

    describe(projName + '.min.js', function () {
      var file = projName + '.min.js';

      it('should contain the correct contents', function (done) {

        // the file should have the expected content
        var expectedContent = [
          checkContents(file, '// Run "gulp" to generate this file')
        ];

        // run the generator
        this.app.run({}, function () {

          // check for expected file contents
          helpers.assertFileContent(expectedContent);

          done();
        });
      });
    });

    describe(projName + '.min.js.map', function () {
      var file = projName + '.min.js.map';

      it('should contain the correct contents', function (done) {

        // the file should have the expected content
        var expectedContent = [
          checkContents(file, '// Run "gulp" to generate this file')
        ];

        // run the generator
        this.app.run({}, function () {

          // check for expected file contents
          helpers.assertFileContent(expectedContent);

          done();
        });
      });
    });
  });

  describe('when --coffee is set', function () {
    beforeEach(function () {
      // set use coffee option
      this.app.options.coffee = true;
    });

    it('should create the expected files', function (done) {
      // the expected files should exist
      var expectedFiles = [
        projName + '.coffee'
      ];

      // run the generator
      this.app.run({}, function () {

        // check for expected files
        helpers.assertFile(expectedFiles);

        done();
      });
    });

    describe(projName + '.coffee', function () {
      var file = projName + '.coffee';

      it('should contain the correct contents', function (done) {

        // the file should have the expected content
        var expectedContent = [
          checkContents(file, '@file ' + projName + ' was created using generator-microjs'),
          checkContents(file, '@author Daniel Lamb <dlamb.open.source@gmail.com>')
        ];

        // run the generator
        this.app.run({}, function () {

          // check for expected file contents
          helpers.assertFileContent(expectedContent);

          done();
        });
      });
    });
  });

  describe('when taskFramework is grunt', function () {
    beforeEach(function () {
      // set use grunt task framework
      promptMocks.taskFramework = 'grunt';
      // mock user prompts
      helpers.mockPrompt(this.app, promptMocks);
    });

    it('should create the expected files', function (done) {
      // the expected files should exist
      var expectedFiles = [
        'gruntfile.js'
      ];

      // run the generator
      this.app.run({}, function () {

        // check for expected files
        helpers.assertFile(expectedFiles);

        done();
      });
    });

    describe('gruntfile.js', function () {
      var file = 'gruntfile.js';

      it('should contain the correct contents', function (done) {

        // the file should have the expected content
        var expectedContent = [
          checkContents(file, '@author Daniel Lamb <dlamb.open.source@gmail.com>')
        ];

        // run the generator
        this.app.run({}, function () {

          // check for expected file contents
          helpers.assertFileContent(expectedContent);

          done();
        });
      });
    });

    describe('package.json', function () {
      var file = 'package.json';

      it('should contain the correct contents', function (done) {

        // the file should have the expected content
        var expectedContent = [
          checkContents(file, 'grunt')
        ];

        // the file should not have unexpected content
        var unexpectedContent = [
          checkContents(file, 'gulp')
        ];

        // run the generator
        this.app.run({}, function () {

          // check for expected file contents
          helpers.assertFileContent(expectedContent);

          // check for unexpected file contents
          helpers.assertNoFileContent(unexpectedContent);

          done();
        });
      });
    });
  });

  describe('when testFramework is mocha', function () {
    beforeEach(function () {
      // set use mocha test framework
      promptMocks.testFramework = 'mocha';
      // mock user prompts
      helpers.mockPrompt(this.app, promptMocks);
    });

    describe('package.json', function () {
      var file = 'package.json';

      it('should contain the correct contents', function (done) {

        // the file should have the expected content
        var expectedContent = [
          checkContents(file, 'mocha')
        ];

        // the file should not have unexpected content
        var unexpectedContent = [
          checkContents(file, 'jasmine')
        ];

        // run the generator
        this.app.run({}, function () {

          // check for expected file contents
          helpers.assertFileContent(expectedContent);

          // check for unexpected file contents
          helpers.assertNoFileContent(unexpectedContent);

          done();
        });
      });
    });
  });
});
