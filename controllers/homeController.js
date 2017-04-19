var preprocesser = require('../modules/preprocesser');
var analyzer = require('../modules/analyzer').analyze;

var index = function(req, res, next) {
	var arr = preprocesser(req.body.text);
	
	//var arr = analyzer(arr);

	res.send({
		arr
	});
};

exports.index = index;