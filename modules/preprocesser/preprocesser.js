var tokenizer = require("./tokenizer")
var stemmer = require("./stemmer")

var preprocessing = function(str){
	let tokenized = tokenizer(str)

	return stemmer(tokenized)
}

module.exports = preprocessing