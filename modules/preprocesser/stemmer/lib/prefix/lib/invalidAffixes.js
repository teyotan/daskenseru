/*
	input = word
	output = boolean
	True bila word memiliki affix yang invalid
	False bila word tidak memiliki affix yang invalid
*/

const each = require("async/each")
const until = require("async/until")

const affixesRules = [
	/^ber(.*)i$/,
	/^di(.*)an$/,
	/^ke(.*)i$/,
	/^ke(.*)an$/,
	/^me(.*)an$/,
	/^ter(.*)an$/,
	/^per(.*)an$/,
];

const invalidAffixes = function(word){
	
	let done = false
	let value = false

	until(
		function(){ 
			return (done) 
		}, 
		each(
			affixesRules,
			function(item, callback){
				if ((word.word + word.removedSuffix).match(item)){
					value = true
					return callback('break')
				}
				callback()
			},
			function(err){
				done = true
				if (err){
					if (err != 'break'){
						console.log(err)
					}
				}
			}
		), 
		function(err){
			if (err){
				console.log(err)
			}
		}
	)

	return value

}

module.exports = invalidAffixes;