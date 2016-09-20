'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};
module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %>-<%= pkg.version %> \n * http://jqPaginator.keenwon.com\n */\n',
                beautify: {
                    ascii_only: true
                },
                compress: {
                    global_defs: {
                        'DEBUG': false
                    },
                    dead_code: true
                }
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['src/js/jqPaginator.js']
                }
            }
        },
        jshint: {
            files: ['src/js/jqPaginator.js'],
            options: {
                // read jshint options from jshintrc file
                "jshintrc": ".jshintrc"
            }
        },
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: ['src/**/*.*']
            }
        },
        clean: {
            src: [ 'dist/']
        },
        connect: {
            options: {
                port: 8888,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, 'src')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%= connect.options.port %>/index.html'
            }
        },
        jasmine: {
            src: 'src/js/jqPaginator.js',
            options: {
                specs: 'test/specs/**/*Spec.js',
                vendor: 'src/js/libs/jquery/jquery.js'
            }
        }
    });

    grunt.registerTask('build', ['clean' , 'test', 'uglify']);

    grunt.registerTask('test', ['jshint', 'jasmine']);

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'connect:livereload',
            'open',
            'watch'
        ]);
    });
};