const invalidAffixes = require("./lib/invalidAffixes.js")
const cutPrefix = require("./lib/cutPrefix.js")

const prefix = function(word, skipInvalidAffixes){

	for (let i = 0; i < 3; i++) {
		if (!skipInvalidAffixes){
			if (invalidAffixes(word)){
				console.log("INVALIDAFFIX:" + word.word)
				return word
			}
		}
		
		word = cutPrefix(word)
	}

	return word
}

module.exports = prefix