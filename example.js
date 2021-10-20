const utils = require('utils')
function foo(x, url) { x.property = utils.escapeHtml(url) }
const url = 'http://www.github.com/?foo=шеллы'
var x = {}
foo(x, url);
decodeURI(x.property)
