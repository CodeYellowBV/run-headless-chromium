/* jshint node:true */
'use strict';
var child_process = require('child_process');
var path = require('path');

// See README.md and https://nodejs.org/api/child_process.html for more info.
exports.spawn = function(chromiumFlags, options) {
  // Spawn a separate process because Xvfb modifies the environment variables,
  // so running multiple instances may have side effects.
  var args = [path.resolve(__dirname, 'run-headless-chromium.js')];
  if (args) {
    args = args.concat(chromiumFlags);
  }
  return child_process.spawn(process.execPath, args, options);
};
