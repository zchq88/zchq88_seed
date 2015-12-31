/**
 * @file gulp任务 监听任务
 * @author zchq88
 */

var gulp = require('gulp');
var config = require('../config');// gulp公共配置

exports.task = function () {
    var streams = [];
    streams.push(
        gulp.src(config.paths.html)
            .pipe(gulp.dest(config.output))
    );
};
