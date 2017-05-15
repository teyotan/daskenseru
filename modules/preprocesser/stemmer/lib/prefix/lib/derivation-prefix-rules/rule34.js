//rule 34 : peCP -> pe-CP where C!={r|w|y|l|m|n} and P!=‘er’

const rule = /^pe([bcdfghjkpqstvxz])(?!er)(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(2)

	word.removedPrefix = 'pe'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut