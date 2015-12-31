/**
 * @file gulp任务rebuild.js
 * @author zchq88
 */

var sync = require('run-sequence');
exports.task = function () {
    sync('webpack', 'html');
};
exports.dependencies = ['clean'];
