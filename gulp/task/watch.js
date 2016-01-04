/**
 * @file gulp任务 监听任务
 * @author zchq88
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../config');// gulp公共配置
var runSequence = require('gulp-run-sequence');

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
    var allPaths = [].concat([config.paths.js], config.paths.html, [config.paths.styl]);
    gulp.watch(allPaths, function () {
        runSequence('rebuild', reload);
    });
};
