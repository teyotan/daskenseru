
const detect = require("async/detect");

var katadasar = require("../../../../models/kata-dasar.js").get;

var rootWordChecker = function(word){
	
	var isFound = false;
	var i = 0;
	
	let lowerCasedWord = word.word.toLowerCase();

	detect(katadasar[lowerCasedWord[0]], function(root, callback){
		callback(root === lowerCasedWord);	
	}, function(result){
		if(result){
			// console.log(result);
			isFound = true;
		}
	});

	word.found = isFound;
	
	return word;
}
module.exports = rootWordChecker;