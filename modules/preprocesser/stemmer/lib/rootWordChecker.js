var katadasar = require("../../../../models/kata-dasar.js").get;

var rootWordChecker = function(word){
	
	var isFound = false;
	var i = 0;
	
	while(i < katadasar.length && !isFound){
		if(katadasar[i] === word.word){
			isFound = true;
		}
	}

	word.found = isFound;
	
	return word;
}
module.exports = rootWordChecker;