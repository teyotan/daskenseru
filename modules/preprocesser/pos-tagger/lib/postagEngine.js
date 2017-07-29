const detect = require("async/detect");
var inlex = require("../../../../models/inlex.js").get;
var HMM = require("./hmm.js");

var postagger = function(word){
	
	// tempWord = {
		// word: word,
		// POSTag: "",
		// found: false
	// }
	
	let lowerCasedWord = word.toLowerCase();
	detect(inlex[lowerCasedWord[0]], function(root, callback){
		if (root.word === lowerCasedWord) {
			callback(null, root);
		}
		else{
			callback(null);
		}
	}, function(err, result){
		if(result){
			console.log(word, result.tag);
		}
		else {
			console.log(word, "NAMA");	
		}
	});
	
	var hmm = new HMM([ '1', '2', '3', 'F' ], 'F', [ 'a', 'b', 'c' ],
	{
        1: 1
    },
	{
        1:
		{
          1: 0.0,
          2: 0.5,
          3: 0.3
		},
        2:
		{
          1: 0.1,
          3: 0.9
		},
        3:
		{
          3: 0.4,
          F: 0.6
		}
    },
	{
        1:
		{
          b: 0.3,
          c: 0.7
		},
        2:
		{
          a: 0.3,
          b: 0.6,
          c: 0.1
		},
        3:
		{
          a: 1
		}
	});
	
	return word;
}

module.exports = postagger;