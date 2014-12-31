module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: [
                'wwwroot',
                '.tscache',
                'bin'
            ],
            ts: [
                'app/app.*',
                'app/ts',
                'tscommand*'
            ]
        },
        copy: {
            html: {
                files: [
                    {
                        expand: true,
                        flatten: false,
                        cwd: 'app/',
                        src: ['**/*.html'],
                        dest: 'wwwroot/'
                    }
                ]
            },
            map: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        cwd: 'bower_components/',
                        src: [
                            'jquery/dist/jquery.min.map',
                            'angular/angular.min.js.map'
                        ],
                        dest: 'wwwroot/js/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        cwd: 'src/',
                        src: ['app.js.map'],
                        dest: 'wwwroot/js/'
                    }
                ]
            },
            ts: {
                files: [
                    {
                        expand: true,
                        flatten: false,
                        cwd: 'src/',
                        src: ['**/*.ts'],
                        dest: 'wwwroot/'
                    }
                ]
            },
            css: {
                files: [
                    { // bower css
                        expand: true,
                        flatten: true,
                        cwd: 'bower_components/',
                        src: [
                            'bootstrap/dist/css/bootstrap.css',
                            'bootstrap/dist/css/bootstrap.css.map'
                        ],
                        dest: 'wwwroot/css/'
                    }
                ]
            },
            nodewebkit: {
                files: [
                    {
                        src: ['nodewebkit.json'],
                        dest: 'wwwroot/package.json'
                    }
                ]
            }
        },
        concat: {
            libs: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js'
                ],
                dest: 'wwwroot/js/lib.min.js'
            },
            app: {
                src: ['src/app.js'],
                dest: 'wwwroot/js/app.js'
            }
        },
        ts: {
            options: {
                target: 'es5',
                //module: 'amd',
                sourceMap: true
                //,compiler: './node_modules/typescript/bin/tsc'
            },
            dev: {
                src: ['app/**/*.ts'],
                reference: 'app/reference.ts',
                out: 'app/app.js'
                //watch: 'src/app'
            }
        },
        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
                src: ['src/**/*.ts']
            }
        },
        "tpm-install": {
            options: {
                dev: false
            },
            all: {src: "bower.json", dest: "bower_components/ts/"}
        },
        "tpm-index": {
            all: {
                src: ["bower_components/ts/**/*.d.ts"],
                dest: "bower_components/ts/all.d.ts"
            }
        },
        uglify: {
            dev: {
                options: {
                    sourceMap: true
                },
                files: {
                    'wwwroot/js/app.min.js': ['wwwroot/js/app.js']
                }
            }
        },
        nodewebkit: {
            options: {
                platforms: ['win'],
                buildDir: 'bin', // Where the build version of my node-webkit app is saved
                cacheDir: 'packages/nodeWebKit'
            },
            build: ['wwwroot/**/*'] // Your node-webkit app
        },
        watch: {
            scripts: {
                files: [
                    'src/app/**/*.ts',
                    'src/**/*.html'
                ],
                tasks: ['dev'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('typescript-tpm');
    grunt.loadNpmTasks('grunt-node-webkit-builder');

    // build tasks DEV/RELEASE
    grunt.registerTask('dev', ['clean', 'copy:html', 'copy:css', 'copy:ts', 'tpm-install', 'tpm-index', 'tslint', 'ts', 'concat', 'uglify', 'copy:map', 'clean:ts']);
    grunt.registerTask('release', ['dev', 'copy:nodewebkit', 'nodewebkit']);
};