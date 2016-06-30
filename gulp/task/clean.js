/**
 * @file gulp任务test
 * @author zchq88
 */

var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config');// gulp公共配置

exports.task = function () {
  return gulp.src([config.output, config.debug])
    .pipe(clean({force: true}))
};
