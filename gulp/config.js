/**
 * @file gulp配置
 * @author zchq88
 */
var VERSION = require('../package.json').version;

module.exports = {
    banner: '/*!\n'
    + ' * zchq88_seed\n'
    + ' * @license MIT\n'
    + ' * v' + VERSION + '\n'
    + ' */\n',
    output: 'bin',
    entry: 'app/app.js'
};
