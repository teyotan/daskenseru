//rule 26b : pem{rV|V} -> pe-p{rV|V}

const rule = /^pem(r)?([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)
	word.word = 'p' + word.word

	word.removedPrefix = 'pe'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut