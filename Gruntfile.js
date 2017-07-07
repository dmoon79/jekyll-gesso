'use strict';

var paths = {
  coffee: ['*.coffee'],
  css: ['*.css'],
  html: ['*.{php,html}', '_source/**/*.{php,html}'],
  images:['_source/images/**/*.{png,jpg,jpeg,gif,webp,svg}'],
  js: ['_source/js/**/*.js'],
  md: ['_source/**/*.{md, markdown}'],
  myData: ['_source/_data/**/*.{csv,json,yml}'],
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
            },
            jekyllDeploy: {
              command: 'rsync -av /sites/portfolio/_live/ bh:www/ardorbrio/'
            },
            buildLive: {
              command: 'rm -rf _live && bundle exec jekyll build --config _config.yml,_config_live.yml && cp -r _public/css/ _live/css/'
            },
            clearPublic: {
                command: 'rm -rf _public'
            },
            options: {
              execOptions: {
                  maxBuffer: Infinity
              }
            }
        },

        // sass (libsass) config
       sass: {
           options: {
               sourceMap: true,
               relativeAssets: false,
               outputStyle: 'expanded',
               sassDir: '_source/_sass',
               cssDir: '_public/css'
           },
           build: {
               files: [{
                   expand: true,
                   cwd: '_source/_sass/',
                   src: ['**/*.{scss,sass}'],
                   dest: '_public/css',
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
                src: '_public/css/*.css'
            }
        },

         // watch for files to change and run tasks when they do
        watch: {
            options: {
                livereload: true,
            },
            html: {
                files: [paths.html, paths.md, paths.myData, paths.js, paths.images],
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
        // 'shell:clearPublic',
        'sass',
        'concurrent:serve',
        'postcss:dist'
    ]);

    // Register the grunt build task
    grunt.registerTask('build', [
        'shell:clearPublic',
        'sass',
        'shell:jekyllBuild',
        'postcss:dist'
    ]);
    grunt.registerTask('deploy', [
        'shell:buildLive',
        'shell:jekyllDeploy'
    ]);
    // Register build as the default task fallback
    grunt.registerTask('default', 'serve');

};
