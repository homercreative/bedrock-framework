module.exports = function(grunt) {

    // configure the tasks
    grunt.initConfig({

        clean: {
            stylesheets: {
                src: ['css/*.css', '!theme.css']
            },
            scripts:{
                src:['js/*.js', '!theme.js']
            }
        },
        sass: {
            stylesheets: {
                options:{
                    style: 'expanded',
                    compass: true,
                    precision: '5'
                },
                files: {
                    'css/template.css' : 'source/scss/template.scss'
                }
            }
        },
        autoprefixer: {
            build: {
                expand: true,
                cwd: 'css',
                src: [ '**/*.css' ],
                dest: 'css'
            }
        },
        cssmin: {
            build: {
                files: {
                    'build/application.css': [ 'css/**/*.css' ]
                }
            }
        },
        coffee: {
            build: {
                expand: true,
                cwd: 'source',
                src: [ '**/*.coffee' ],
                dest: 'js',
                ext: '.js'
            }
        },
        uglify: {

            build: {
                files: {
                    'js/script.min.js': 'js/script.js'
                }
            }
        },
        concat: {
            options:{
                separator: '\r\n'
            },
            build: {
                src: ['source/js/plugins/*.js', 'source/js/script.js'],
                dest: 'js/script.js'
            }
        },
        watch: {
            build:{
                files: ['source/js/**/*.js', 'source/scss/**/*.scss'],
                tasks: ['build']
            }

        }



    });

    grunt.registerTask(
        'stylesheets',
        'Compiles the stylesheets.',
        [ 'sass']
    );

    grunt.registerTask(
        'scripts',
        'Compiles the JavaScript files.',
        [ 'coffee', 'concat' ]
    );

    grunt.registerTask(
        'compress',
        'compress and compiles all js and css',
        ['uglify']
    );

    grunt.registerTask(
        'build',
        'Compiles all of the assets and copies the files to the build directory.',
        [ 'clean', 'stylesheets', 'scripts', 'compress', 'watch' ]
    );

    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // define the tasks
};