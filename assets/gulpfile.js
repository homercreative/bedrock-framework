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
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps');


// Sass/CSS
var sass = require('gulp-ruby-sass'),
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css');

// JS

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var assign = require('lodash.assign');
var uglify = require('gulp-uglify');

// compile all your Sass

gulp.task('sass', function () {
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

gulp.task('javascript', function () {
    // set up the browserify instance on a task basis
    var b = browserify({
        entries: './source/javascript/script.js',
        debug: true
    });

    return b.bundle()
        .pipe(source('./source/javascript/script.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(rename("script.min.js"))
        .pipe(sourcemaps.write('.')) // writes .map file
        .pipe(gulp.dest('js'));
});

gulp.task('watch', ['sass', 'javascript'], function () {
    gulp.watch(paths.styles.src + "**/*.scss", ['sass']);
    gulp.watch(paths.scripts.src + "**/*.js", ['javascript']);
});

gulp.task('default', ['sass', 'javascript']);