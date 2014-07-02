# generator-microjs
[![Build Status][build-image]][build-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Code GPA][gpa-image]][gpa-url]
[![Dependency Status][depstat-image]][depstat-url]
[![NPM version][npm-image]][npm-url]
[![IRC Channel][irc-image]][irc-url]
[![Gitter][gitter-image]][gitter-url]
[![GitTip][tip-image]][tip-url]

## About

Quickly scaffold out a micro library or framework, with readme, unit tests and gulp or grunt pre-configured.

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
$ npm install -g yo
```

### Setup

To install generator-microjs from npm, run:

```bash
$ npm install -g generator-microjs
```

Finally, initiate the generator:

```bash
$ yo microjs
```

## Options

* `--skip-install`

  Defaults to `true`. Skips the automatic execution of `bower` and `npm` after scaffolding has finished.

* `--test-framework=<framework>`

  Defaults to `mocha`. Can be switched for another supported testing framework like `jasmine`.

* `--test-framework=<framework>`

  Defaults to `mocha`. Can be switched for another supported testing framework like `jasmine`.

* `--coffee`

  Defaults to `true`. Add support for [CoffeeScript](http://coffeescript.org/).

## Testing

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
[build-image]: http://img.shields.io/travis/daniellmb/generator-microjs.svg

[coverage-url]: https://codeclimate.com/github/daniellmb/generator-microjs/code?sort=covered_percent&sort_direction=desc
[coverage-image]: http://img.shields.io/codeclimate/coverage/github/daniellmb/generator-microjs.svg

[gpa-url]: https://codeclimate.com/github/daniellmb/generator-microjs
[gpa-image]: http://img.shields.io/codeclimate/github/daniellmb/generator-microjs.svg

[depstat-url]: https://david-dm.org/daniellmb/generator-microjs
[depstat-image]: https://david-dm.org/daniellmb/generator-microjs.png?theme=shields.io

[issues-url]: https://github.com/daniellmb/generator-microjs/issues
[issues-image]: http://img.shields.io/github/issues/daniellmb/generator-microjs.svg

[downloads-url]: https://www.npmjs.org/package/generator-microjs
[downloads-image]: http://img.shields.io/npm/dm/generator-microjs.svg

[npm-url]: https://www.npmjs.org/package/generator-microjs
[npm-image]: https://badge.fury.io/js/generator-microjs.png

[irc-url]: http://webchat.freenode.net/?channels=generator-microjs
[irc-image]: http://img.shields.io/badge/irc-%23microjs-brightgreen.svg

[gitter-url]: https://gitter.im/daniellmb/microjs
[gitter-image]: http://img.shields.io/badge/gitter-daniellmb/microjs-brightgreen.svg

[tip-url]: https://www.gittip.com/daniellmb
[tip-image]: http://img.shields.io/gittip/daniellmb.svg