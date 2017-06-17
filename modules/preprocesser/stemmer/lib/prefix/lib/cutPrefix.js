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

const stubCekKamus = function(word){
	console.log("jalanin stub")
	if(word.word == "tangkal") { return true }
	if(word.word == "tangkap") { return true }
	if(word.word == "nukik") { return true }
	return false
}

const cutPrefix = function(word){
	let done = false
	let temp = null

	until(
		function(){ 
			return (done) 
		}, 
		each(
			prefixRules,
			function(item, callback){
				if (item.ruleMatch(word)){
					if(stubCekKamus(item.ruleCut(word))){
						word = item.ruleCut(word)
						temp = null
						return callback('break')
					} else {
						if (!temp) {
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

	if(temp){return temp}
	return word
}

module.exports = cutPrefix