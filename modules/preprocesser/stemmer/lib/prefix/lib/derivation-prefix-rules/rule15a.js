//rule 15a :menV -> me-nV

const rule = /^men([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(2)

	word.removedPrefix = 'me'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut