//rule 19 : mempA -> mem-pA where A!=‘e’

const rule = /^memp([abcdfghijklmopqrstuvwxyz])(.*)$/

const ruleMatch19 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut19 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'mem'
	return temp
}

exports.ruleMatch = ruleMatch19
exports.ruleCut = ruleCut19