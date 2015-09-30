'use strict';

var path = require('path');
var fs = require('fs');

var middleware = {};
var dir = path.join(__dirname, 'middleware');
fs.readdirSync(dir).forEach(function(filename) {
  if (filename.length <= 3) return;
  if (filename.substr(-3) != '.js') return;

  var route = filename.substr(0, filename.length - 3);
  middleware[route] = require(path.join(dir, filename));
});
exports.middleware = middleware;

// loads all route files
exports.routes = function(routeDir, dirname) {
  var routes = {};
  var dir = path.join(dirname, routeDir);
  fs.readdirSync(dir).forEach(function(filename) {
    if (filename.length <= 3) return;
    if (filename.substr(-3) != '.js') return;

    var route = filename.substr(0, filename.length - 3);
    routes[route] = require(path.join(dir, filename));
  });
  return routes;
};
