module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            build: {
                options:{
                    style: 'expanded',
                        compass: true,
                        precision: '5'
                },
                files: {
                    'css/template.css' : 'source/scss/template.scss'
                    //'css/ie.css' : 'source/scss/ie.scss'
                }
            }
        },
        requirejs: {
            build: {
                options: {
                    wrap: false,
                    almond: true,
                    name: 'source/javascript/lib/almond/almond.js',
                    mainConfigFile: "source/javascript/config/require.js",
                    include: ['source/javascript/script.js'],
                    out: "js/script.js"
                }
            }
        },
        watch: {
            build:{
                files: ['source/javascript/**/*.js', 'source/scss/**/*.scss'],
                tasks: ['build']
            }

        }


    });

    grunt.registerTask('build', ['sass','requirejs', 'watch']);
    grunt.registerTask('default', ['build']);

    // load the tasks
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

};