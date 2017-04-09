var eachOf = require("async/eachOf");

var commondots = require("../../models/commondots.js").get;

var func = function(parsed){
	eachOf(parsed, function (parValue, parKey, parCallback){
		try {
			eachOf(parValue, function (senValue, senKey, senCallback){
				try {
					if(senValue == "End Of Sentence"){
						if(commondots.indexOf(parValue[senKey-2].toLowerCase()) + 1){
							parValue.splice(senKey, 1);
						}
					}
		        } catch (err) {
		            return senCallback(err)
		        }
				senCallback();
			}, function(err){
				if(err){
					console.log(err)
				}
			})
        } catch (err) {
            return parCallback(err)
        }
		parCallback();
	}, function(err){
		console.log("Removing faulty EOS done")
		if(err){
			console.log(err)
		}
	})
}

exports.get = func;
