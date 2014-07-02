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

All about how amazing your micro-library is.

## Examples

```JavaScript
  // TODO
```
<% if (options.coffee) { %>
```CoffeeScript
  # TODO
```
<% } %>
## Install Choices
- `bower install <%= projName %>`
- [download the zip](https://github.com/<%= githubUser %>/<%= projName %>/archive/master.zip)

## Testing

Tests can be run with the `npm test` command.

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
[build-image]: http://img.shields.io/travis/<%= githubUser %>/<%= projName %>.svg

[gpa-url]: https://codeclimate.com/github/<%= githubUser %>/<%= projName %>
[gpa-image]: http://img.shields.io/codeclimate/github/<%= githubUser %>/<%= projName %>.svg

[coverage-url]: https://codeclimate.com/github/<%= githubUser %>/<%= projName %>/code?sort=covered_percent&sort_direction=desc
[coverage-image]: http://img.shields.io/codeclimate/coverage/github/<%= githubUser %>/<%= projName %>.svg

[depstat-url]: https://david-dm.org/<%= githubUser %>/<%= projName %>
[depstat-image]: https://david-dm.org/<%= githubUser %>/<%= projName %>.png?theme=shields.io

[issues-url]: https://github.com/<%= githubUser %>/<%= projName %>/issues
[issues-image]: http://img.shields.io/github/issues/<%= githubUser %>/<%= projName %>.svg

[bower-url]: http://bower.io/search/?q=<%= projName %>
[bower-image]: https://badge.fury.io/bo/<%= projName %>.png

[downloads-url]: https://www.npmjs.org/package/<%= projName %>
[downloads-image]: http://img.shields.io/npm/dm/<%= projName %>.svg

[npm-url]: https://www.npmjs.org/package/<%= projName %>
[npm-image]: https://badge.fury.io/js/<%= projName %>.png

[irc-url]: http://webchat.freenode.net/?channels=<%= projName %>
[irc-image]: http://img.shields.io/badge/irc-%23microseed-brightgreen.svg

[gitter-url]: https://gitter.im/<%= githubUser %>/<%= projName %>
[gitter-image]: http://img.shields.io/badge/gitter-<%= githubUser %>/<%= projName %>-brightgreen.svg

[tip-url]: https://www.gittip.com/<%= githubUser %>
[tip-image]: http://img.shields.io/gittip/<%= githubUser %>.svg