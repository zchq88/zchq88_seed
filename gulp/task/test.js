/**
 * @file gulp任务test
 * @author zchq88
 */
var gulp = require('gulp');
var gutil = require('gulp-util');
exports.task = function () {
    gutil.log(gutil.colors.red('test任务'));
};
