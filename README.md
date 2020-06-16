# markdown-it-bracketed-spans

[![Build Status](https://img.shields.io/travis/GerHobbelt/markdown-it-bracketed-spans/master.svg?style=flat)](https://travis-ci.org/GerHobbelt/markdown-it-bracketed-spans)
[![NPM version](https://img.shields.io/npm/v/@gerhobbelt/markdown-it-bracketed-spans.svg?style=flat)](https://www.npmjs.org/package/@gerhobbelt/markdown-it-bracketed-spans)
[![Coverage Status](https://img.shields.io/coveralls/GerHobbelt/markdown-it-bracketed-spans/master.svg?style=flat)](https://coveralls.io/r/GerHobbelt/markdown-it-bracketed-spans?branch=master)


Span tag plugin for [markdown-it markdown parser](https://github.com/markdown-it/markdown-it).

Markup is based on [pandoc `bracketed_spans` extension](http://pandoc.org/MANUAL.html#extension-bracketed_spans),
for example:

    paragraph with [a span]{.myClass}

Must be used together with the [markdown-it-attrs plugin](https://github.com/arve0/markdown-it-attrs)
(that's a peer dependency).


## Usage

```javascript
var md = require('markdown-it')()
            .use( require('markdown-it-bracketed-spans') )
            .use( require('markdown-it-attrs') )

var output = md.render('foo [bar *bar*]{#id .class attr=value} baz')
```

Output will be:

```html
<p>
  foo
  <span id="id" class="class" attr="value">
    bar <em>bar</em>
  </span>
  baz
</p>
```
