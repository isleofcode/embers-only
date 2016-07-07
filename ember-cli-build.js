/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var path = require('path');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        path.join('bower_components', 'bourbon', 'app', 'assets', 'stylesheets')
      ]
    }
  });

  return app.toTree();
};
