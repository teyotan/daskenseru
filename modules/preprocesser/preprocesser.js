var tokenizer = require("./tokenizer")

var preprocessing = function(str){
	return tokenizer(str)
}

module.exports = preprocessing