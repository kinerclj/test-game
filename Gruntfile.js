module.exports = function (grunt) {
   grunt.initConfig({
      browserify: {
         dist: {
            options: {
               transform: [
                  ['babelify', {presets: ['es2015']}]
               ]
            },
            files: {
              'public/js/game.js': ['game/**/*.js']
            }
         }
      },
      watch: {
         scripts: {
            files: ['game/**/*.js'],
            tasks: ['browserify']
         }
      }
   });

   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-contrib-watch');

   grunt.registerTask('default', ['watch']);
   grunt.registerTask('build', ['browserify']);
};
