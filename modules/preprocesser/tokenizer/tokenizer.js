var eachOfSeries = require("async/eachOfSeries")

/* not used in the moment */
// var removeInvalidEOS = require("./lib/removeInvalidEOS.js").get
	
var tokenizer = function(str){
	var arrTemp = str.split("");
	var arr = [];
	var word = "";
	var newP = true;

	const wordToArray = function(word){
		if (word != "") {
			if (newP){
				arr.push([])
				newP = false;
			}
			
			arr[arr.length-1].push(word);
		}
	}
	
	return new Promise ((resolve, reject) => {
		eachOfSeries(
			arrTemp,
			function (value, key, callback){
				try {
					if (value.match(/^([A-Z]|[a-z]|[0-9])/)){
						word += value;
					} else if (value.match(" ")){
						wordToArray(word)
						word = ""
					} else if (value == "\"" || value == "'" || value == "(" || value == ")"){
						wordToArray(word)
						wordToArray(value)
						word = ""
					} else if (value == "\r"){
						wordToArray(word)
						word = ""
					} else if (value == "\n"){
						newP = true
						wordToArray("")
					} else if (arrTemp[key+1] != " "){
						if (arrTemp[key+1] == "\r" || arrTemp[key+1] == undefined || arrTemp[key+1] == "\""){
							wordToArray(word)
							word = value
						} else {
							word += value
						}
					} else {
						wordToArray(word)
						word = value
					}
		        } catch (err) {
		            return callback(err)
		        }
				callback();
			},
			function(err){
				wordToArray(word)
				console.log("Tokenizer done")
				if(err){
					console.log(err)
				}
			}
		);

		/* not used in the moment */
		// removeInvalidEOS(arr);
		resolve(arr)
	})
}

module.exports = tokenizer;