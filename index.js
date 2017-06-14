'use strict';


global.INDEX_DIRECTORY = __dirname;
require('oktopost-namespace').dynamic();


var is;
namespace('Plankton', (root) => { is = root.Plankton.is; });
module.exports = is;