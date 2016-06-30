/**
 * @file gulp任务rebuild.js
 * @author zchq88
 */

exports.dependencies = ['webpack', 'html'];
var gulp = require('gulp');
var config = require('../config');// gulp公共配置
var revCollector = require('gulp-rev-collector'); //- 路径替换
var minifyHtml = require("gulp-minify-html"); //html压缩

exports.task = function () {
  return gulp.src([config.output + '/rev/**/*.json', config.output + '/**/*.html'])
    .pipe(revCollector())
    .pipe(minifyHtml())
    .pipe(gulp.dest(config.output))
};