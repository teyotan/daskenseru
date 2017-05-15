//rule 26a : pem{rV|V} -> pe-m{rV|V}

const rule = /^pem(r)?([aiueo])(.*)$/

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