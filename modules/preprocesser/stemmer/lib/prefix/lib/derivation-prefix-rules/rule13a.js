//rule 13a :mem{rV|V} -> me-m{rV|V}

const rule = /^mem(r)?([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(2)
	
	word.removedPrefix = 'me'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut