const fs = require('fs')
const each = require("async/each")
const until = require("async/until")

const rulePath = '/derivation-prefix-rules/'

const asd = [];

const prefixRules = fs.readdirSync(__dirname + rulePath)
prefixRules.forEach(
	(element, index, array) => {
		array[index] = require('.' + rulePath + element)
	}
)

const cutPrefix = function(word){
	let done = false

	until(
		function(){ 
			return (done) 
		}, 
		each(
			prefixRules,
			function(item, callback){
				if (item.ruleMatch(word)){
					word = item.ruleCut(word)
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

	return word
}

module.exports = cutPrefix