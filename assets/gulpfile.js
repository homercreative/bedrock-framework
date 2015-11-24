'use strict';

var basePaths = {
    assets: './'
};

var paths = {
    scripts: {
        src: basePaths.assets + 'source/javascript/',
        dest: basePaths.assets + 'js/'
    },
    styles: {
        src: basePaths.assets + 'source/scss/',
        dest: basePaths.assets + 'css'
    }
};

// Gulp
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    gutil = require('gulp-util');

// Sass/CSS
var sass = require('gulp-ruby-sass'),
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css'),
    jshintStylish= require('jshint-stylish'),
    sourcemaps = require('gulp-sourcemaps');


// JS

var jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat');

// compile all your Sass
gulp.task('sass', function (){
    gulp.src(paths.styles.src + '**/*.scss')
        .pipe(compass({
            config_file: 'config.rb',
            css: paths.styles.dest,
            sass: paths.styles.src,
            sourcemap: true
        }))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCSS())
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('scripts', function () {
    return gulp.src(paths.scripts.src + '*.js', { read: false })
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(browserify({ transform: ['coffeeify'], extensions: ['.coffee'] }))
        .pipe(concat('script.min.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.scripts.dest));

});

gulp.task('watch', ['sass', 'bundle', 'scripts'], function(){
        gulp.watch(paths.styles.src + "**/*.scss", ['sass']);
        gulp.watch(paths.scripts.src + "**/*.js", ['bundle','scripts']);
});

gulp.task('default', ['sass','bundle', 'scripts']);