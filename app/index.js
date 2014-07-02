'use strict';

var url = require('url');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var npmName = require('npm-name');
/* jshint -W106 */
var proxy = process.env.http_proxy || process.env.HTTP_PROXY || process.env.https_proxy || process.env.HTTPS_PROXY || null;
/* jshint +W106 */
var githubOptions = {
  version: '3.0.0'
};

if (proxy) {
  var proxyUrl = url.parse(proxy);
  githubOptions.proxy = {
    host: proxyUrl.hostname,
    port: proxyUrl.port
  };
}

var GitHubApi = require('github');
var github = new GitHubApi(githubOptions);

var extractProj = function (_, appname) {
  var slugged = _.slugify(appname);
  var match = slugged.match(/^generator-(.+)/);

  if (match && match.length === 2) {
    return match[1].toLowerCase();
  }

  return slugged;
};

var githubUserInfo = function (name, cb) {

  // handle bad data
  if (name === 'daniellmb') {
    /*jshint camelcase:false */
    cb({
      name: 'Daniel Lamb',
      email: 'dlamb.open.source@gmail.com',
      html_url: 'https://github.com/daniellmb'
    });

    // exit
    return;
  }

  github.user.getFrom({
    user: name
  }, function (err, res) {
    if (err) {
      throw new Error(err.message + '\n\nCannot fetch your github profile. Make sure you\'ve typed it correctly.');
    }
    cb(JSON.parse(JSON.stringify(res)));
  });
};

var MicroJSGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');
    this.currentYear = (new Date()).getFullYear();

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  welcome: function () {

    if (this.options['skip-welcome-message']) {
      return;
    }

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to the marvelous MicroJS generator!'));

  },

  askForUsername: function () {
    var done = this.async();

    var prompts = [{
      name: 'githubUser',
      message: 'Would you mind telling me your username on GitHub?',
      default: (process.env && process.env.USER !== undefined) ? process.env.USER : 'username'
    }];

    this.prompt(prompts, function (props) {
      this.githubUser = props.githubUser;

      done();
    }.bind(this));
  },

  askForProj: function () {
    var done = this.async();
    var projName = extractProj(this._, this.appname);

    var prompts = [{
      name: 'projName',
      message: 'What\'s the name of your project?',
      default: projName
    }, {
      type: 'confirm',
      name: 'pkgName',
      message: 'The name above already exists on npm, choose another?',
      default: true,
      when: function (answers) {
        var done = this.async();
        var name = answers.projName;

        npmName(name, function (err, available) {
          if (!available) {
            done(true);
          }

          done(false);
        });
      }
    }];

    this.prompt(prompts, function (props) {
      if (props.pkgName) {
        return this.askForProj();
      }

      this.projName = props.projName;

      done();
    }.bind(this));
  },

  askForTaskFramework: function () {
    var done = this.async();

    var prompts = [{
      name: 'taskFramework',
      message: 'What task runner do you want to use?',
      type : 'list',
      choices : [
        { name : 'Gulp', value : 'gulp' },
        { name : 'Grunt', value : 'grunt' }
      ],
      default : 'gulp'
    }];

    this.prompt(prompts, function (props) {
      this.taskFramework = props.taskFramework;

      done();
    }.bind(this));
  },

  askForTestFramework: function () {
    var done = this.async();

    var prompts = [{
      name: 'testFramework',
      message: 'What test runner do you want to use?',
      type : 'list',
      choices : [
        { name : 'Jasmine', value : 'jasmine' },
        { name : 'Mocha', value : 'mocha' }
      ],
      default : 'jasmine'
    }];

    this.prompt(prompts, function (props) {
      this.testFramework = props.testFramework;

      done();
    }.bind(this));
  },

  askForLicType: function () {
    var done = this.async();

    var prompts = [{
      type: 'confirm',
      name: 'useMitOrg',
      message: 'Would you like to use mit-license.org?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.useMitOrg = props.useMitOrg;

      done();
    }.bind(this));
  },

  userInfo: function () {
    var done = this.async();

    githubUserInfo(this.githubUser, function (res) {
      /*jshint camelcase:false */
      this.realname = res.name;
      this.email = res.email;
      this.githubUrl = res.html_url;
      done();
    }.bind(this));
  },

  bower: function () {
    this.template('_bower.json', 'bower.json');
  },

  packageJSON: function () {
    this.template('_package.json', 'package.json');
  },

  git: function () {
    this.copy('gitattributes', '.gitattributes');
    this.copy('gitignore', '.gitignore');
  },

  taskRunner: function () {
    if (this.taskFramework === 'grunt') {
      this.template('_gruntfile.js', 'gruntfile.js');
    } else {
      this.template('_gulpfile.js', 'gulpfile.js');
    }
  },

  projectFiles: function () {
    var baseFileName = path.basename(this.projName, path.extname(this.projName));
    
    this.copy('editorconfig', '.editorconfig');

    // only copy over coffee if the option was set
    if (this.options.coffee) {
      this.template('micro-tmpl.coffee', baseFileName + '.coffee');
    }
    this.template('micro-tmpl.js', baseFileName + '.js');
    this.template('micro-tmpl.min.js', baseFileName + '.min.js');
    this.template('micro-tmpl.min.js', baseFileName + '.min.js.map');
    this.template('README.md', 'README.md');
  },

  testConfig: function () {
    this.template('test/karma.conf.js', 'test/karma.conf.js');
  },

  jshint: function () {
    this.copy('jshintrc', '.jshintrc');
  },

  tests: function () {
    var baseFileName = path.basename(this.projName, path.extname(this.projName));

    this.mkdir('test/spec');
    this.template('test/' + this.testFramework + '.spec.js', 'test/spec/' + baseFileName + '.spec.js');
  }
});

module.exports = MicroJSGenerator;
