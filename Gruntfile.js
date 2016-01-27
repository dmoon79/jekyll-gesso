'use strict';

var paths = {
  coffee: ['*.coffee'],
  css: ['*.css'],
  html: ['*.{php,html}', '_source/**/*.{php,html}'],
  images:['_source/images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
  js: ['_source/js/**/*.js'],
  md: ['*.{md, markdown}'],
  myData: ['_source/_data/**/*.{csv.json}'],
  sass: ['_source/_sass/**/*.{scss,sass}']
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
                command: 'bundle exec jekyll build'
            },
            jekyllServe: {
                command: 'bundle exec jekyll serve'
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
                src: '_public/css/*.css'
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
                tasks: ['shell:jekyllBuild'],
            },
        },
        
        // run tasks in parallel
        concurrent: {
            serve: [
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
        'shell:jekyllBuild',
        'postcss:dist'
    ]);
    
    // Register build as the default task fallback
    grunt.registerTask('default', 'serve');
    
};