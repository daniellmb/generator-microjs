# <%= projName %>
[![Build Status][build-image]][build-url]
[![Code GPA][gpa-image]][gpa-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Bower Version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![IRC Channel][irc-image]][irc-url]
[![Gitter][gitter-image]][gitter-url]
[![GitTip][tip-image]][tip-url]

## About

All about how amazing the <%= projName %> micro-library is.

This repository was scaffolded with [<%= pkg.name %>](https://github.com/daniellmb/generator-microjs).

## Examples

### JavaScript

```JavaScript
  // TODO
```
<% if (options.coffee) { %>
### CoffeeScript

```CoffeeScript
  # TODO
```
<% } %>
## Install Choices
- `bower install <%= projName %>`
- [download the zip](https://github.com/<%= githubUser %>/<%= projName %>/archive/master.zip)

## Tasks

All tasks can be run by simply running `<%= taskFramework %>` or with the `npm test` command, or individually:

  * `<%= taskFramework %> lint` will lint source code for syntax errors and anti-patterns.
  * `<%= taskFramework %> gpa` will analyze source code against complexity thresholds.
  * `<%= taskFramework %> test` will run the <%= testFramework %> unit tests against the source code.<% if (options.coffee) { %>
  * `<%= taskFramework %> test-coffee` will run the <%= testFramework %> unit tests against the CoffeeScript source code.<% } %>
  * `<%= taskFramework %> test-min` will run the <%= testFramework %> unit tests against the minified code.

## License

(The MIT License)

Copyright (c) <%= currentYear %> <%= realname %> <%= email %>

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



[build-url]: https://travis-ci.org/<%= githubUser %>/<%= projName %>
[build-image]: http://img.shields.io/travis/<%= githubUser %>/<%= projName %>.png

[gpa-url]: https://codeclimate.com/github/<%= githubUser %>/<%= projName %>
[gpa-image]: https://codeclimate.com/github/<%= githubUser %>/<%= projName %>.png

[coverage-url]: https://codeclimate.com/github/<%= githubUser %>/<%= projName %>/code?sort=covered_percent&sort_direction=desc
[coverage-image]: https://codeclimate.com/github/<%= githubUser %>/<%= projName %>/coverage.png

[depstat-url]: https://david-dm.org/<%= githubUser %>/<%= projName %>
[depstat-image]: https://david-dm.org/<%= githubUser %>/<%= projName %>.png?theme=shields.io

[issues-url]: https://github.com/<%= githubUser %>/<%= projName %>/issues
[issues-image]: http://img.shields.io/github/issues/<%= githubUser %>/<%= projName %>.png

[bower-url]: http://bower.io/search/?q=<%= projName %>
[bower-image]: https://badge.fury.io/bo/<%= projName %>.png

[downloads-url]: https://www.npmjs.org/package/<%= projName %>
[downloads-image]: http://img.shields.io/npm/dm/<%= projName %>.png

[npm-url]: https://www.npmjs.org/package/<%= projName %>
[npm-image]: https://badge.fury.io/js/<%= projName %>.png

[irc-url]: http://webchat.freenode.net/?channels=<%= projName %>
[irc-image]: http://img.shields.io/badge/irc-%23<%= projName %>-brightgreen.png

[gitter-url]: https://gitter.im/<%= githubUser %>/<%= projName %>
[gitter-image]: http://img.shields.io/badge/gitter-<%= githubUser %>/<%= projName %>-brightgreen.png

[tip-url]: https://www.gittip.com/<%= githubUser %>
[tip-image]: http://img.shields.io/gittip/<%= githubUser %>.png