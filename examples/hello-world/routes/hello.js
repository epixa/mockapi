'use strict';

exports.get = function(req, res) {
  res.json({ hello: req.params.world });
};
