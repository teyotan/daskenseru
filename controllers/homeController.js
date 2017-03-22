var parser = require('../modules/parser').splitToWord;
var analyzer = require('../modules/analyzer').analyze;

var index = function(req, res, next) {
	var arr = parser(req.body.text);
	
	var arr = analyzer(arr);

	res.send({
		rawData: arr,
		// person: arr.filter(function(element){
		// 	return ((element.tag == "B_PER") || (element.tag == "I_PER"))
		// }),
		// organisasi: arr.filter(function(element){
		// 	return ((element.tag == "B_ORG") || (element.tag == "I_ORG"))
		// }),
		// location: arr.filter(function(element){
		// 	return ((element.tag == "B_LOC") || (element.tag == "I_LOC"))
		// }),
	});
};

exports.index = index;