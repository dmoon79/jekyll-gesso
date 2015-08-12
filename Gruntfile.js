'use strict';

var paths = {
  // localDev:"http://llwp:8888",
  js: ['_source/js/**/*.js'],
  html: ['*.{php,html}', '_source/_includes/**/*.{php,html}', '_source/_layouts/**/*.{php,html}'],
  md: ['*.{md, markdown}'],
  coffee: ['*.coffee'],
  sass: ['_source/_sass/**/*.{scss,sass}'],
  images:['_source/images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
  css: ['*.css'],
  myData: ['_source/_data/**/*.{csv.json}']
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
        
        // sass (libsass) config
        // sass: {
        //     options: {
        //         sourceMap: true,
        //         relativeAssets: false,
        //         outputStyle: 'expanded',
        //         sassDir: '_sass',
        //         cssDir: '_site/css'
        //     },
        //     build: {
        //         files: [{
        //             expand: true,
        //             cwd: '_sass/',
        //             src: ['**/*.{scss,sass}'],
        //             dest: '_site/css',
        //             ext: '.css'
        //         }]
        //     }
        // },

        // COMPASS
        // compass:{
        //   dist: {
        //     options: {
        //       sassDir: '_sass',
        //       config: 'config.rb'
        //     }
        //   }
        // },

         // watch for files to change and run tasks when they do
        watch: {
            html: {
                files: [paths.html, paths.md, paths.myData],
                tasks: ['shell:jekyllBuild'],
                options: {
                    livereload: true
                }
            }
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
        'concurrent:serve'
    ]);
    
    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:jekyllBuild'
    ]);
    
    // Register build as the default task fallback
    grunt.registerTask('default', 'build');
    
};