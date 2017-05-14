//rule 10 : me{l|r|w|y}V -> me-{l|r|w|y}V

const rule = /^me([lrwy])([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(2)
	
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut