/**
 * @file gulp任务test
 * @author zchq88
 */

var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config');// gulp公共配置

exports.task = function () {
    var streams = [];
    streams.push(
        gulp.src(config.output)
            .pipe(clean({force: true}))
    );
};
