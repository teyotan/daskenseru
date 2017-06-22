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
		tempWord = suffix(prefix(tempWord))
	} else {
		console.log("suffix dulu??")
		tempWord = prefix(suffix(tempWord))
		console.log(tempWord.word)
	}
	
	if (!tempWord.found){
		console.log("pieceofshit")
		if(tempWord.removedSuffix.match(/an|kan|i/)){
			tempWord.word = tempWord.word + tempWord.removedSuffix
			tempWord.removedSuffix = ""
		}
		tempWord = prefix(suffix(tempWord), true)
	}

	if (tempWord.found){
		return tempWord.word
	}

	return word
}
module.exports = stemEngine;