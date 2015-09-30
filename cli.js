'use strict';

var fs = require('fs');
var path = require('path');

var route = fs.readFileSync(path.join(__dirname, 'templates', 'route.js'));
var app = fs.readFileSync(path.join(__dirname, 'templates', 'app.js'));
var pkg = fs.readFileSync(path.join(__dirname, 'templates', 'package.json'));

pkg = JSON.parse(pkg);
pkg.dependencies.mockapi = require('./package.json').version;
pkg = JSON.stringify(pkg, null, 2);

// make routes directories
fs.mkdirSync('./routes', '0755');

// write final templates to files
createFile('package.json', pkg);
createFile('app.js', app);
createFile('routes/hello.js', route);

function createFile(path, content) {
  fs.writeFileSync('./' + path, content);
  console.log('   \x1b[36mcreate\x1b[0m : ' + path);
}
