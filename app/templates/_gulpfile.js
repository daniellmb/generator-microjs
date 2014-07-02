/**
 * @file
 *
 * ### Responsibilities
 * - automate common tasks using gulp
 *
 * Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> v<%= pkg.version %>
 *
 * @author <%= realname %> <<%= email %>>
 */
'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    complexity = require('gulp-complexity'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    karma = require('gulp-karma');

gulp.task('default', function () {
  return gulp.src('<%= baseFileName %>.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(complexity({
      cyclomatic: [8],
      halstead: [9],
      maintainability: [100]
    }))
    .pipe(karma({
      configFile: './test/karma.conf.js',
      action: 'run'
    }))
    .pipe(rename('<%= baseFileName %>.min.js'))
    .pipe(uglify({
      preserveComments: 'some',
      outSourceMap: true
    }))
    .pipe(gulp.dest('.'));
});