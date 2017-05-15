//rule 36 : peC1erC2 -> pe-C1erC2 where C1!={r|w|y|l|m|n}

const rule = /^pe([bcdfghjkpqstvxz])(er)([bcdfghjklmnpqrstvwxyz])(.*)$/

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