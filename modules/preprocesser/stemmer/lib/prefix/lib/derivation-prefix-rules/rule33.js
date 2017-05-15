//rule 33 : peCerV -> per-erV where C!={r|w|y|l|m|n}

const rule = /^pe([bcdfghjkpqstvxz])(er)([aiueo])(.*)$/

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