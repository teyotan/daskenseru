//rule 24 : perCAerV -> per-CAerV where C!=‘r’

const rule = /^per([bcdfghjklmnpqstvwxyz])([a-z])(er)([aiueo])(.*)$/

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