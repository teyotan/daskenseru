var tokenizer = require("./tokenizer")
var stemmer = require("./stemmer")

var preprocessing = function(str){
	
	let tokenized, stemmed

	return new Promise((resolve, reject) => {
		let tempTokenized = tokenizer(str)
		resolve(tempTokenized)
	})
	.then((tempTokenized) => {
		tokenized = tempTokenized
		tempStemmed = JSON.parse(JSON.stringify(tokenized));
		tempStemmed = stemmer(tempStemmed)
		return tempStemmed
	}).then((tempStemmed) => {
		stemmed = tempStemmed
		return {
			tokenized: tokenized,
			stemmed: stemmed,
		}
	})
}

module.exports = preprocessing