/* eslint-env mocha, es6 */

const path = require('path');
const generate = require('@gerhobbelt/markdown-it-testgen');


describe('markdown-it-bracketed-spans', function () {
  const md = require('@gerhobbelt/markdown-it')({ linkify: true })
              .use(require('../'));

  generate(path.join(__dirname, 'fixtures/bracketed-spans.txt'), md);
});
