//rule 21a : perV -> per-V

const rule = /^per([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)

	word.removedPrefix = 'per'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut