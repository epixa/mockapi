'use strict';

module.exports = function notFoundHandler() {
  var notFoundJson = JSON.stringify({ error: { message: 'Route not found' } });
  return function(req, res) {
    res.status(404);
    res.end(notFoundJson);
  };
};
