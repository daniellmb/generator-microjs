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
    karma = require('gulp-karma'),
    source = '<%= baseFileName %>.js',
    sourceMin = '<%= baseFileName %>.min.js',
    sourceAndSpecs = [source, 'test/spec/*.spec.js'];

gulp.task('lint', function () {
  return gulp.src(sourceAndSpecs)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('gpa', function () {
  return gulp.src(sourceAndSpecs)
    .pipe(complexity({
      cyclomatic: [8],
      halstead: [9],
      maintainability: [100]
    }));
});

gulp.task('test', function () {
  return gulp.src(sourceAndSpecs)
    .pipe(karma({
      configFile: 'test/karma.conf.js'
    }));
});
<% if (options.coffee) { %>
gulp.task('test-coffee', function () {
  return gulp.src(['<%= baseFileName %>.coffee', 'test/spec/*.spec.coffee'])
    .pipe(karma({
      configFile: 'test/karma.conf.coffee'
    }));
});<% } %>

gulp.task('min', function () {
  return gulp.src(source)
    .pipe(rename(sourceMin))
    .pipe(uglify({
      preserveComments: 'some',
      outSourceMap: true
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['lint', 'gpa', 'test',<% if (options.coffee) { %> 'test-coffee',<% } %> 'min']);