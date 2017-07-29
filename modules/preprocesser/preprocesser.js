var tokenizer = require("./tokenizer")
var stemmer = require("./stemmer")
var postagger = require("./pos-tagger")

var preprocessing = function(str){
	
	let tokenized, stemmed, postagged

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
		tempPostagged  = postagger(stemmed)
	}).then((tempPostagged) => {
		postag = tempPostagged
		return {
			tokenized: tokenized,
			stemmed: stemmed,
			postagged: postag
		}
	})
}

module.exports = preprocessing