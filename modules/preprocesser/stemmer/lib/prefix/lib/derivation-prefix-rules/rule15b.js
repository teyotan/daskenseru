//rule 15b :menV -> me-tV

const rule = /^men([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)
	word.word = 't' + word.word

	word.removedPrefix = 'me'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut