var eachOf = require("async/eachOf")

var commondots = require("../../models/commondots.js").get;

commondots.then((resolved) => {
  return Promise.resolve(resolved);
});


var func = function(parsed){
	eachOff(parsed, function (parValue, parKey, parCallback){
		try {
			eachOff(parValue, function (senValue, senKey, senCallback){
				try {
					senValue
		        } catch (err) {
		            return callback(err)
		        }
				callback();
			}, function(err){
				if(err){
					console.log(err)
				}
			})
        } catch (err) {
            return callback(err)
        }
		callback();
	}, function(err){
		console.log("Removing faulty EOS done")
		if(err){
			console.log(err)
		}
	})
}

exports.get = commondots;