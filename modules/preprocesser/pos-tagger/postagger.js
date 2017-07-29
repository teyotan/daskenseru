var each = require("async/each"); // Pertimbangkan eachLimit untuk efisiensi resource memori dalam Async
var postagEngine = require("./lib/postagEngine.js");

var postagger = function(arr){
	
	each(arr, function (sentence, cb_el){
		
		each(sentence, function (word, cb_el_x){
			postagEngine(word); cb_el_x(null);
		}, function(err){
			if (err){
				console.log(err);
			}
			cb_el(null);
		});
		
	}, function(err){
		if (err){
			console.log(err);
		}
	});
	
	return arr;
}

module.exports = postagger;