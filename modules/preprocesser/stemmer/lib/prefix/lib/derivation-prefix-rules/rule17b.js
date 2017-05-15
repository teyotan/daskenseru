//rule 17b : mengV -> meng-kV

const rule = /^meng([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(4)
	word.word = 'k' + word.word

	word.removedPrefix = 'meng'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut