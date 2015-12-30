/**
 * @file gulp任务test
 * @author zchq88
 */

var gutil = require('gulp-util');
var config = require('../config');// gulp公共配置

exports.task = function () {
    gutil.log(gutil.colors.red(config.banner));
};
