var eachOf = require("async/eachOf");

var stemmer = function(arr){
	eachOf(arr, function (parValue, parKey, parCallback){
		try {
			eachOf(parValue, function (senValue, senKey, senCallback){
				try {
					parValue[senKey] = senValue + 'Stemmed bruh'
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