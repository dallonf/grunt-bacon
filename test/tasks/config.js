/*
 * grunt-bacon
 * https://github.com/DallonF/grunt-bacon
 *
 * Copyright (c) 2014 Dallon Feldner
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask('testConfig', function() {
    grunt.config.set('__testOutput__.config.called', this.target);
  });

};