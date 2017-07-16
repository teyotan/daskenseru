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

	if(word.length < 4){
		return word
	}

	if (rulePrecedence(tempWord)){
		// console.log("RULEPRECEDENCE:" + tempWord.word) //debuggingnya theo
		tempWord = suffix(prefix(tempWord))
	} else {
		// console.log("suffix dulu??") //debuggingnya theo
		tempWord = prefix(suffix(tempWord))
	}
	
	if (!tempWord.found){
		// console.log("pieceofshit") //debuggingnya theo
		if(tempWord.removedSuffix.match(/an|kan|i/)){
			tempWord.word = tempWord.word + tempWord.removedSuffix
		}
		tempWord = prefix(suffix(tempWord), true)
	}

	if (tempWord.found){
		return tempWord.word
	} else {
		tempWord.word = word
		tempWord = suffix(prefix(tempWord, true))
		if (tempWord.found){
			return tempWord.word
		}
	}

	return word
}
module.exports = stemEngine;