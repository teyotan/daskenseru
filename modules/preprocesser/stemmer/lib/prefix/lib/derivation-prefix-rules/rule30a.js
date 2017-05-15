//rule 30a : pengV -> peng-V

const rule = /^peng([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(4)

	word.removedPrefix = 'peng'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut