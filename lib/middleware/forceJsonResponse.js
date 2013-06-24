module.exports = function forceJsonResponse(){
  return function(req, res, next){
    res.header('Content-Type', 'application/json');
    next();
  };
};
