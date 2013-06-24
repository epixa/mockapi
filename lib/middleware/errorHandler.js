module.exports = function errorHandler(env){
  return function(err, req, res, next){
    if (err.status) res.statusCode = err.status;
    if (res.statusCode < 400) res.statusCode = 500;
    if ('test' != env) console.error(err.stack);
    var error = { message: err.message, stack: err.stack };
    for (var prop in err) error[prop] = err[prop];
    res.end(JSON.stringify({ error: error }));
  };
};
