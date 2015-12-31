/**
 * @file gulp任务webpack
 * @author zchq88
 */

var webpack = require('webpack-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../config');// gulp公共配置
var plumber = require('gulp-plumber');//报错不退出

exports.task = function () {
    gutil.log(gutil.colors.red(config.entry));
    var streams = [];
    streams.push(
        gulp.src(config.entry)
            .pipe(plumber())
            .pipe(webpack(require('../../webpack.config')))
            .pipe(gulp.dest(config.output))
    );
};
