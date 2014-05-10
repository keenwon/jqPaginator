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
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'src/js/jqPaginator.js'
                ],
                dest: 'dist/<%= pkg.version %>/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %>-<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n',
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
                    'dist/<%= pkg.version %>/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['src/js/*.js'],
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
            spm: {
                src: [ '**/.gitignore', '**/.npmignore']
            }
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
        }
    });

    grunt.registerTask('build', ['test', 'concat', 'uglify']);

    grunt.registerTask('test', ['jshint']);

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