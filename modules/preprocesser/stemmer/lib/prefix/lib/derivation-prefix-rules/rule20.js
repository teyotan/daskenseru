//rule 20 : pe{w|y}V -> pe-{w|y}V

const rule = /^pe([wy])([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(2)

	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut