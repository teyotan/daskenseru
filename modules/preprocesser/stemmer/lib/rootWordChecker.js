var kata-dasar = require("../../../../models/kata-dasar.js").get;

var stemEngine = function(word){
	
	word = suffix(word);
	word = preffix(word);
	
	return word;
}
module.exports = stemEngine;