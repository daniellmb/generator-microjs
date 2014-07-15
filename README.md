# generator-microjs
[![Build Status][build-image]][build-url]
[![Code GPA][gpa-image]][gpa-url]
[![Dependency Status][depstat-image]][depstat-url]
[![NPM Version][npm-image]][npm-url]
[![IRC Channel][irc-image]][irc-url]
[![Gitter][gitter-image]][gitter-url]
[![GitTip][tip-image]][tip-url]

## About

Quickly scaffold out a micro library or framework.

## Features

  * Pre-fills information using your GitHub account data.
  * Checks if your new project name is already taken on NPM.
  * Choose your preferred task runner framework.
    * [Gulp](http://gulpjs.com)
    * [Grunt](http://gruntjs.com)
  * Choose your preferred unit test framework.
    * [Jasmine](http://jasmine.github.io)
    * [Mocha](http://visionmedia.github.io/mocha)
    * [QUnit](http://qunitjs.com) (TODO)
  * Test coverage pre-configured to publish to code climate.
  * Micro library template is pre-configured for AMD, Node.js and browser support.
  * README file
    * Dynamic based on the project configurations.
    * Pre-configured badges for:
      * Travis Build Status: [![Build Status][build-image]][build-url]
      * Code Quality GPA: [![Code GPA][gpa-image]][gpa-url]
      * Dependency Status: [![Dependency Status][depstat-image]][depstat-url]
      * NPM Version: [![NPM Version][npm-image]][npm-url]
      * NPM Downloads: [![NPM Downloads][downloads-image]][downloads-url]
      * IRC Channel: [![IRC Channel][irc-image]][irc-url]
      * Gitter Chat Room: [![Gitter][gitter-image]][gitter-url]
      * GitTip: [![GitTip][tip-image]][tip-url]
  * [JSHint](https://www.npmjs.org/package/jshint) pre-configured to lint the source code and unit tests.
  * [Complexity Report](https://www.npmjs.org/package/complexity-report) pre-configured to analyze source code for maintainability.
  * [Karma](https://www.npmjs.org/package/karma) pre-configured to run unit tests in your chosen framework.
  * [Travis CI](https://travis-ci.org) configured for continuous integration.
    * pre-configured to publish build status to your project IRC channel and gitter chat room.
  * included `dot` files
    * .editorconfig
    * .gitattributes
    * .gitignore
    * .jshintrc
    * .npmignore
    * .travis.yml

## Setup

You'll need Yeoman installed if you don't have it already.

```bash
$ npm install -g yo
```

To install generator-microjs from npm, run:

```bash
$ npm install -g generator-microjs
```

## Scaffolding

Go to your new project folder, run the generator and answer the prompts. The use `--coffee` flag is optional.

```bash
$ yo microjs --coffee
```

## Check List

Step-by-step for creating a new micro-lib. A LOT will be done for you, but there are some things you should customize in your newly scaffolded micro-library.

  1. Create an empty repository on [GitHub](https://github.com).
  1. Clone it to your computer
  1. Go to your new project folder, run the `microjs` generator and answer the prompts.
  1. NPM
    1. Update the description in your `package.json` file and add appropriate keywords.
    1. Shrinkwrap your node.js modules using `npm shrinkwrap -dev`
  1. Travis
    1. enable any build status notifications you want published.
    1. enable publishing test coverage to code climate.
  1. Writing unit tests for your code.
  1. Implementing your micro library or framework.
  1. Activate the repository in [Travis](https://travis-ci.org).
  1. Push you *initial commit* to GitHub.
  1. Activate the repository on [CodeClimate](https://codeclimate.com).
  1. Create a new release of your code on GitHub.
  1. Publish version to NPM with `npm publish`.
  1. Register your framework with [Bower](http://bower.io/).

## Options

* `--skip-install`

  Defaults to `true`. Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

* `--coffee`

  Defaults to `true`. Add support for [CoffeeScript](http://coffeescript.org/).

## Updating

Use the following command to update to the latest version of generator-microjs.

```bash
$ npm update -g generator-microjs
```

## Contributing

Pull requests welcome :)

### TODO List

  * add option for sass / css
  * add option for creating a demo page

### Testing

Unit tests for this generator are written in [Mocha](http://visionmedia.github.io/mocha) and can be run using `npm test`.

## License

(The MIT License)

Copyright (c) 2014 Daniel Lamb <dlamb.open.source@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[build-url]: https://travis-ci.org/daniellmb/generator-microjs
[build-image]: http://img.shields.io/travis/daniellmb/generator-microjs.png

[gpa-url]: https://codeclimate.com/github/daniellmb/generator-microjs
[gpa-image]: http://img.shields.io/codeclimate/github/daniellmb/generator-microjs.png

[coverage-url]: https://codeclimate.com/github/daniellmb/generator-microjs/code?sort=covered_percent&sort_direction=desc
[coverage-image]: http://img.shields.io/codeclimate/coverage/github/daniellmb/generator-microjs.png

[depstat-url]: https://david-dm.org/daniellmb/generator-microjs
[depstat-image]: https://david-dm.org/daniellmb/generator-microjs.png?theme=shields.io

[issues-url]: https://github.com/daniellmb/generator-microjs/issues
[issues-image]: http://img.shields.io/github/issues/daniellmb/generator-microjs.png

[downloads-url]: https://www.npmjs.org/package/generator-microjs
[downloads-image]: http://img.shields.io/npm/dm/underscore.png

[npm-url]: https://www.npmjs.org/package/generator-microjs
[npm-image]: https://badge.fury.io/js/generator-microjs.png

[irc-url]: http://webchat.freenode.net/?channels=generator-microjs
[irc-image]: http://img.shields.io/badge/irc-%23microjs-brightgreen.png

[gitter-url]: https://gitter.im/daniellmb/generator-microjs
[gitter-image]: http://img.shields.io/badge/gitter-daniellmb/generator--microjs-brightgreen.png

[tip-url]: https://www.gittip.com/daniellmb
[tip-image]: http://img.shields.io/gittip/daniellmb.png