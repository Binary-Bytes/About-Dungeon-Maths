'use strict';

// Plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    maps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    del = require('del');

// Compile SCSS
gulp.task('scss', function() {
    return gulp.src(['src/css/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'));
});

// Concat CSS
gulp.task('concat-css', ['scss'], function() {
    return gulp.src(['src/css/bootstrap.css','src/css/main.css'])
    .pipe(maps.init())
    .pipe(concat('stylesheet.css'))
    .pipe(maps.write('./'))
    .pipe(gulp.dest('css'));
});

// Minify CSS
gulp.task('minify-css', ['concat-css'], function() {
    return gulp.src('css/stylesheet.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('stylesheet.min.css'))
    .pipe(gulp.dest('css'));
});

// Minify Scripts
gulp.task('minify-scripts', ['minify-css'], function() {
    return gulp.src('src/js/app.js')
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});

// Clean
gulp.task('clean', function() {
    del(['src/css/stylesheet*.css*','src/css/main.css','css','js']);
});

// Build
gulp.task('build', ['minify-scripts'], function() {
});

// Watch
gulp.task('watch',function() {  
    gulp.watch('src/css/*',['default']);
});

// Default
gulp.task('default', ['clean'], function() {
    gulp.start('build');
});