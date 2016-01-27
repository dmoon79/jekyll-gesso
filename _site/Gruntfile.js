'use strict';

var paths = {
  coffee: ['*.coffee'],
  css: ['*.css'],
  html: ['*.{php,html}', '**/*.{php,html}'],
  images:['images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
  js: ['js/**/*.js'],
  md: ['*.{md, markdown}'],
  myData: ['_data/**/*.{csv.json}'],
  sass: ['_sass/**/*.{scss,sass}']
};

module.exports = function (grunt) {
    
    // Show elapsed time after tasks run to visualize performance
    require('time-grunt')(grunt);
    // Load all Grunt tasks that are listed in package.json automagically
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // shell commands for use in Grunt tasks
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },
        
        // sass (libsass) config
        sass: {
            options: {
                sourceMap: true,
                relativeAssets: false,
                outputStyle: 'expanded',
                sassDir: '_sass',
                cssDir: '_site/css'
            },
            build: {
                files: [{
                    expand: true,
                    cwd: '_sass/',
                    src: ['**/*.{scss,sass}'],
                    dest: '_site/css',
                    ext: '.css'
                }]
            }
        },

        // Autoprefixer
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: '_site/css/*.css'
            }
        },

         // watch for files to change and run tasks when they do
        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: [paths.html, paths.md, paths.myData],
                tasks: ['shell:jekyllBuild'],
            },
            sass: {
                files: [paths.sass],
                tasks: ['sass'],
            },
        },
        
        // run tasks in parallel
        concurrent: {
            serve: [
                'sass',
                'watch',
                'shell:jekyllServe'
            ],
            options: {
                logConcurrentOutput: true
            }
        },
        
    });
    
    // Register the grunt serve task
    grunt.registerTask('serve', [
        'concurrent:serve',
        'postcss:dist'
    ]);
    
    // Register the grunt build task
    grunt.registerTask('build', [
        'sass',
        'shell:jekyllBuild',
        'postcss:dist'
    ]);
    
    // Register build as the default task fallback
    grunt.registerTask('default', 'serve');
    
};