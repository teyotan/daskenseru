var eachOf = require("async/eachOf");
var stemEngine = require("./lib/stemEngine.js");

var stemmer = function(arr){
	eachOf(arr, function (parValue, parKey, parCallback){ // Paragraph
		try {
			eachOf(parValue, function (senValue, senKey, senCallback){ // Sentence
				try {
					parValue[senKey] = stemEngine(senValue)
		        } catch (err) {
		            return senCallback(err)
		        }
				senCallback();
			}, function(err){
				if(err){
					return console.log(err)
				}
			})
		} catch (err) {
			return parCallback(err)
        }
		parCallback();
	}, function(err){
		console.log("Stemmer done")
		if(err){
			return console.log(err)
		}
	})

	return arr
}

module.exports = stemmer;