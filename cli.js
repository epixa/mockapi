'use strict';

var os = require('os');
var fs = require('fs');

var route = [
  '\'use strict\';',
  '',
  'exports.get = function(req, res) {',
  '  res.json({ hello: req.params.world });',
  '};',
  ''
].join(os.EOL);

var app = [
  '\'use strict\';',
  '',
  'var mockapi = require(\'mockapi\');',
  'var express = mockapi.express;',
  '',
  'var app = express();',
  'var routes = mockapi.routes(\'routes\', __dirname);',
  '',
  'app.set(\'port\', process.env.PORT || 3000);',
  'app.use(express.favicon());',
  'app.use(express.logger(\'dev\'));',
  'app.use(express.bodyParser());',
  'app.use(mockapi.middleware.forceJsonResponse());',
  'app.use(app.router);',
  'app.use(mockapi.middleware.notFoundHandler());',
  'app.use(mockapi.middleware.errorHandler(app.get(\'env\')));',
  '',
  '// api routes',
  'app.get(\'/hello/:world\', routes.hello.get);',
  '',
  'app.listen(app.get(\'port\'), function() {',
  '  console.log(\'Mock API server listening on port \' + app.get(\'port\'));',
  '});',
  ''
].join(os.EOL);

var pkg = JSON.stringify({
  name: "api-name",
  version: "0.0.1",
  private: true,
  scripts: {
    start: "node app.js"
  },
  dependencies: {
    mockapi: require('./package.json').version
  }
});

// make routes directories
fs.mkdir('./routes', '0755', function(err) {
  if (err) throw err;
  createFile('package.json', pkg);
  createFile('app.js', app);
  createFile('routes/hello.js', route);
});

function createFile(path, content) {
  fs.writeFile('./' + path, content);
  console.log('   \x1b[36mcreate\x1b[0m : ' + path);
}
