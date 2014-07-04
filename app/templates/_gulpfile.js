/**
 * @file
 *
 * ### Responsibilities
 * - automate common tasks using gulp
 *
 * Scaffolded with <%= pkg.name %> v<%= pkg.version %>
 *
 * @author <%= realname %> <<%= email %>>
 */
'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    complexity = require('gulp-complexity'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    karma = require('gulp-karma'),
    fs = require('fs'),
    source = '<%= baseFileName %>.js',
    sourceMin = '<%= baseFileName %>.min.js',
    specs = 'test/spec/*.spec.js',
    karmaConf = 'test/karma.conf',
    umdWrapper = fs.readFileSync('./.umd');

gulp.task('lint', function () {
  return gulp.src([source, specs])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('gpa', function () {
  return gulp.src([source, specs])
    .pipe(complexity({
      cyclomatic: [8],
      halstead: [9],
      maintainability: [100]
    }));
});

gulp.task('test', function () {
  return gulp.src([source, specs])
    .pipe(karma({
      configFile: karmaConf + '.js'
    }));
});

gulp.task('min', function () {
  return gulp.src(source)
    .pipe(rename(sourceMin))
    .pipe(uglify({
      outSourceMap: true
    }))
    .pipe(replace(/(.*)/, umdWrapper))
    .pipe(gulp.dest('.'));
});
<% if (options.coffee) { %>
gulp.task('test-coffee', function () {
  return gulp.src(['<%= baseFileName %>.coffee', 'test/spec/*.spec.coffee'])
    .pipe(karma({
      configFile: karmaConf + '.coffee'
    }));
});<% } %>

gulp.task('test-min', ['min'], function () {
  return gulp.src([sourceMin, specs])
    .pipe(karma({
      configFile: karmaConf + '.js',
      reporters: ['dots']
    }));
});

gulp.task('default', ['lint', 'gpa', 'test',<% if (options.coffee) { %> 'test-coffee',<% } %> 'test-min']);