/**
 * @file gulp任务 调试模式
 * @author zchq88
 */

var gulp = require('gulp');
var config = require('../config');// gulp公共配置
var revCollector = require('gulp-rev-collector'); //- 路径替换

exports.task = function () {
  var path = config.paths.html.concat('app/rev-manifest.json');
  return gulp.src(path)
    .pipe(revCollector())
    .pipe(gulp.dest(config.debug))
};
