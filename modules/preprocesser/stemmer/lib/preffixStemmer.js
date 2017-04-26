var kata-dasar = require("../../../../models/kata-dasar.js").get;

var preffixStemmer = function(word){
	
	word = suffix(word);
	word = preffix(word);
	
	return word;
}
module.exports = preffixStemmer;