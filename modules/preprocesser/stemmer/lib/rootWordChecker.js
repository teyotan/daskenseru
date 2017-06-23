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
	// while(i < katadasar.length && !isFound){
		// if(katadasar[i] === word.word.toLowerCase()){
			// isFound = true;
		// }
		// i++;
	// }

	word.found = isFound;
	
	console.log("Root Word Checker Done!");
	
	return word;
}
module.exports = rootWordChecker;