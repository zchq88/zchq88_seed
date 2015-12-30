/**
 * @file gulp任务分拣
 * @author zchq88
 */

'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var fs = require('fs');

// 任务入口
gulp.task('default', function () {
    var log = gutil.colors.red('开始任务');
    gutil.log(gutil.colors.bgBlack(log));
});

// 从gulp目录读取任务
fs.readdirSync('./gulp/task')
    .filter(function (filename) {
        return filename.match(/\.js$/i);
    })
    .map(function (filename) {
        return {
            name: filename.substr(0, filename.length - 3),
            contents: require('./gulp/task/' + filename)
        };
    })
    .forEach(function (file) {
        gulp.task(file.name, file.contents.dependencies, file.contents.task);
    });
