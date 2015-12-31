/**
 * @file gulp配置
 * @author zchq88
 */
var VERSION = require('../package.json').version;
var serve = require('browser-sync');
var path = require('path');
var root = 'app';

function resolveToApp(files) {
    return path.join(root, files);
}
module.exports = {
    banner: '/*!\n'
    + ' * zchq88_seed\n'
    + ' * @license MIT\n'
    + ' * v' + VERSION + '\n'
    + ' */\n',
    output: 'bin',
    entry: 'app/app.js',
    root: root,
    paths: {
        js: resolveToApp('/**/*!(.spec.js).js'),
        html: [
            resolveToApp('**/*.html')
        ],
        styl: resolveToApp('**/*.styl')
    },
    serve: serve
};
