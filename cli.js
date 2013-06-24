var os = require('os')
  , fs = require('fs');

var route = [
    'exports.get = function(req, res){'
  , '  res.json({ hello: req.params.world });'
  , '};'
  , ''
].join(os.EOL);

var app = [
    'var strapi = require(\'strapi\')'
  , '  , express = strapi.express'
  , ''
  , 'var app = express();'
  , 'var routes = strapi.routes(\'routes\', __dirname);'
  , ''
  , 'app.set(\'port\', process.env.PORT || 3000);'
  , 'app.use(express.favicon());'
  , 'app.use(express.logger(\'dev\'));'
  , 'app.use(express.bodyParser());'
  , 'app.use(strapi.middleware.forceJsonResponse());'
  , 'app.use(app.router);'
  , 'app.use(strapi.middleware.notFoundHandler());'
  , 'app.use(strapi.middleware.errorHandler(app.get(\'env\')));'
  , ''
  , '// api routes'
  , 'app.get(\'/hello/:world\', routes.hello.get);'
  , ''
  , 'app.listen(app.get(\'port\'), function(){'
  , '  console.log(\'Mock API server listening on port \' + app.get(\'port\'));'
  , '});'
  , ''
].join(os.EOL);

// make routes directories
fs.mkdir('./routes', '0755', function(err){
  if (err) throw err;
  fs.writeFile('./app.js', app);
  console.log('   \x1b[36mcreate\x1b[0m : app.js');

  fs.writeFile('./routes/hello.js', route);
  console.log('   \x1b[36mcreate\x1b[0m : routes/hello.js');
});
