//rule 17a : mengV -> meng-V

const rule = /^meng([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(4)

	word.removedPrefix = 'meng'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut