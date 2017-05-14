/*
	input = word
	output = boolean
	True bila memenuhi precedence rules
	False bila tidak memenuhi precedence rules
*/

const each = require("async/each");
const until = require("async/until");

const precedenceRules = [
	/^be(.*)lah$/,
	/^be(.*)an$/,
	/^me(.*)i$/,
	/^di(.*)i$/,
	/^pe(.*)i$/,
	/^ter(.*)i$/,
];

const rulePrecedence = function(word){
	
	let done = false
	let value = false

	until(
		function(){ 
			return (done) 
		}, 
		each(
			precedenceRules,
			function(item, callback){
				if (word.word.match(item)){
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
module.exports = rulePrecedence;