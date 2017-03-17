var parser = require('../modules/parser').splitToWord;
var analyzer = require('../modules/analyze').analyze;

var index = function(req, res, next) {
	var arr = parser(req.body.text);
	
	var arr = analyzer(arr);

	res.send(arr);
};

exports.index = index;