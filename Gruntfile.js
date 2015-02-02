'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify : {
      dist : {
        files : {
          'dist/imgwarp.js' : [
            'js/point.js',
            'js/matrix22.js',
            'js/deformation.js',
            'js/interpolation.js',
            'js/point_definer.js'
          ]
        }
      }
    }
  });
}
