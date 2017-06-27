var tokenizer = require("./tokenizer")
var stemmer = require("./stemmer")

var preprocessing = function(str){
	let tokenized = tokenizer(str)

	let stemmed = JSON.parse(JSON.stringify(tokenized));

	stemmed = stemmer(stemmed)

	return {
		tokenized: tokenized,
		stemmed: stemmed,
	}
}

module.exports = preprocessing