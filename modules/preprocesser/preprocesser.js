var tokenizer = require("./tokenizer")
var stemmer = require("./stemmer")

var logger = require('winston').loggers.get('logger')

var preprocessing = function(str){
	logger.info(str)

	let tokenized = tokenizer(str)

	return stemmer(tokenized)
}

module.exports = preprocessing