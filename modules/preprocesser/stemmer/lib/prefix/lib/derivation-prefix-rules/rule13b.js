//rule 13b :mem{rV|V} -> me-p{rV|V}

const rule = /^mem(r)?([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)
	word.word = 'p' + word.word
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut