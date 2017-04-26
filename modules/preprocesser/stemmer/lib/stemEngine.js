var suffix = require("./SuffixStemmer.js");
var preffix = require("./PreffixStemmer.js");

var stemEngine = function(word){
	
	word = suffix(word);
	word = preffix(word);
	
	return word;
}
module.exports = stemEngine;