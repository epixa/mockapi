var mockapi = require('../../lib/mockapi')
  , express = mockapi.express;

var app = express();
var routes = mockapi.routes('routes', __dirname);

app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(mockapi.middleware.forceJsonResponse());
app.use(app.router);
app.use(mockapi.middleware.notFoundHandler());
app.use(mockapi.middleware.errorHandler(app.get('env')));

// api routes
app.get('/hello/:world', routes.hello.get);

app.listen(app.get('port'), function(){
  console.log('Mock API server listening on port ' + app.get('port'));
});
