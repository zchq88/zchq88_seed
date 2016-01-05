/**
 * @file gulp任务 监听任务
 * @author zchq88
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../config');// gulp公共配置
var path = require('path');

exports.task = function () {
    config.serve({
        port: process.env.PORT || 3000,
        open: false,
        server: {baseDir: config.output}
    });
    gutil.log(gutil.colors.red('server启动'));
    var reload = function () {
        return config.serve.reload();
    };
    var webpackPaths = [].concat([config.paths.js], [config.paths.styl]);
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(webpackPaths, ['webpack']);
    gulp.watch(path.join(config.output, '**/*.*'), reload);
};
