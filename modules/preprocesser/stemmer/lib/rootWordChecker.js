//TODO
//Di bikin async

const detect = require("async/detect");

var katadasar = require("../../../../models/kata-dasar.js").get;

var rootWordChecker = function(word){
	
	var isFound = false;
	var i = 0;
	
	detect(katadasar, function(root, callback){
		callback(root === word.word.toLowerCase());	
	}, function(result){
		if(result){
			console.log(result);
			isFound = true;
		}
	});

	word.found = isFound;
	
	return word;
}
module.exports = rootWordChecker;