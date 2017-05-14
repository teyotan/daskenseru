//rule 19 : mempA -> mem-pA where A!=‘e’

const rule = /^memp([abcdfghijklmopqrstuvwxyz])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)

	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut