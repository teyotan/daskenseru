//TODO
//For diganti async
//check if removed prefix is same with previous one

const invalidAffixes = require("./lib/invalidAffixes.js")
const cutPrefix = require("./lib/cutPrefix.js")

const prefix = function(word, skipInvalidAffixes){
	console.log(word.word)

	for (let i = 0; i < 3; i++) {
		word = word
		if(!word.found){
			if (!skipInvalidAffixes){
				if (invalidAffixes(word)){
					console.log("INVALIDAFFIX:" + word.removedPrefix + "+" + word.word + "+" + word.removedSuffix)
					return word
				}
			}

			word = cutPrefix(word)
		}	
	}

	return word
}

module.exports = prefix