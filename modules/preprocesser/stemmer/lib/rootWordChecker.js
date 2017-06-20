var katadasar = require("../../../../models/kata-dasar.js").get;

var rootWordChecker = function(word){
	
	var isFound = false;
	var i = 0;
	
	while(i < katadasar.length && !isFound){
		if(katadasar[i] === word.word){
			isFound = true;
		}
		i++;
	}

	word.found = isFound;
	console.log(word.word);
	console.log(word.found);
	console.log("Root Word Checker Done!");
	
	return word;
}
module.exports = rootWordChecker;