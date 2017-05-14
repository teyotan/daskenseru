const suffix = require("./suffixStemmer.js");
const prefix = require("./prefix");
const rulePrecedence = require("./rulePrecedence.js");

const stemEngine = function(word){
	
	tempWord = {
		removedPrefix: "",
		word: word,
		removedSuffix: "",
		found: false,
	}

	if (rulePrecedence(tempWord)){
		console.log("RULEPRECEDENCE:" + tempWord.word)
		tempWord = prefix(suffix(tempWord))
	} else {
		tempWord = suffix(prefix(tempWord))
	}
	
	if (!tempWord.found){
		if(tempWord.removedSuffix.match(/an|kan|i/))
		tempWord.word = tempWord.word + tempWord.removedSuffix
		tempWord.removedSuffix = ""
		tempWord = prefix(tempWord, true)
	}

	return tempWord.word
}
module.exports = stemEngine;