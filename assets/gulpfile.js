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

// Browserify
var browserify = require('browserify');

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

var concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    globby = require('globby'),
    through = require('through2'),
    reactify = require('reactify'),
    uglify = require('gulp-uglify');


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

gulp.task('scripts', function(){
   gulp.src(paths.scripts.src + '*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(concat('script.js'))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest))
});

gulp.task('bundle', function () {
    // gulp expects tasks to return a stream, so we create one here.
    var bundledStream = through();

    bundledStream
        // turns the output bundle stream into a stream containing
        // the normal attributes gulp plugins expect.
        .pipe(source('bundle.js'))
        // the rest of the gulp task, as you would normally write it.
        // here we're copying from the Browserify + Uglify2 recipe.
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // Add gulp plugins to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.scripts.dest));

    // "globby" replaces the normal "gulp.src" as Browserify
    // creates it's own readable stream.
    globby([paths.scripts.src + '*.js']).then(function(entries) {
        // create the Browserify instance.
        var b = browserify({
            entries: entries,
            debug: true,
            transform: [reactify]
        });

        // pipe the Browserify stream into the stream we created earlier
        // this starts our gulp pipeline.
        b.bundle().pipe(bundledStream);
    }).catch(function(err) {
        // ensure any errors from globby are handled
        bundledStream.emit('error', err);
    });

    // finally, we return the stream, so gulp knows when this task is done.
    return bundledStream;
});

gulp.task('watch', ['sass', 'scripts'], function(){
        gulp.watch(paths.styles.src + "**/*.scss", ['sass']);
        gulp.watch(paths.scripts.src + "**/*.js", ['bundle','scripts']);
});

gulp.task('default', ['sass','bundle', 'scripts']);