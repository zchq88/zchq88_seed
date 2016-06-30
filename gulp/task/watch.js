/**
 * @file gulp任务 监听任务
 * @author zchq88
 */

var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('../config');// gulp公共配置
var path = require('path');

exports.dependencies = ['debug_html'];
exports.task = function () {
    config.serve({
        port: process.env.PORT || 3000,
        open: false,
        server: {baseDir: config.debug}
    });
    gutil.log(gutil.colors.red('server启动'));
    var reload = function () {
        return config.serve.reload();
    };
    gulp.watch(config.paths.html, ['debug_html', reload]);
};
