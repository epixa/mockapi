var express = require('express')
  , strapi = require('../../lib/strapi');

var app = express();
var routes = strapi.routes('routes', __dirname);

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(strapi.middleware.forceJsonResponse());
app.use(app.router);
app.use(strapi.middleware.notFoundHandler());
app.use(strapi.middleware.errorHandler(app.get('env')));

// api routes
app.get('/hello/:world', routes.hello.get);

app.listen(app.get('port'), function(){
  console.log('Mock API server listening on port ' + app.get('port'));
});
