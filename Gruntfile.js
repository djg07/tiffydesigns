module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({
    jshint: {
      files: ['src/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
        my_target: {
          options: {
            sourceMap: true
          },
          files: {
            'dest/minified.js': ['<%= jshint.files %>']
          }
        }
      },
    sass: {
      dist: {
        files: {
          'dest/styles.css' : 'src/styles.scss'
        },
        // options: {
        //   lineNumbers: true,
        //   noCache: true
        // }

      }
    },
    watch: {
      files: ['<%= jshint.files %>', 'src/**/*.scss'],
      tasks: ['jshint', 'sass'] //add uglify on deployment
    },

    
  });

  
  grunt.registerTask('default', ['jshint', 'sass']);
  grunt.registerTask('deploy', ['uglify']);
  //add 'uglify' on deployment
};