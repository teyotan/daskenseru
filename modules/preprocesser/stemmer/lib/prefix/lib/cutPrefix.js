const fs = require('fs')
const each = require("async/each")
const until = require("async/until")

const rulePath = '/derivation-prefix-rules/'

const prefixRules = fs.readdirSync(__dirname + rulePath)
prefixRules.forEach(
	(element, index, array) => {
		array[index] = require('.' + rulePath + element)
	}
)

const rootWordCheck = require("../../rootWordChecker.js")

const cutPrefix = function(word){
	let done = false
	let temp = null

	word = rootWordCheck(word)

	if(!word.found){
		until(
			function(){ 
				return (done) 
			}, 
			each(
				prefixRules,
				function(item, callback){
					if (item.ruleMatch(word)){
						if(rootWordCheck(item.ruleCut(word)).found){
							if(!word.found){
								word = item.ruleCut(word)
								word.found = true
								temp = null
								return callback('break')
							}
						} else {
							if (!temp) { // Untuk recording
								temp = item.ruleCut(word)
							}
						}
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
	}

	if(temp && !word.found){return temp}
	return word
}

module.exports = cutPrefix