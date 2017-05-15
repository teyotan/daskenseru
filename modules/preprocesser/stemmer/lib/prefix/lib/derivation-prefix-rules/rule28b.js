//rule 28b : penV -> pe-tV

const rule = /^pen([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)
	word.word = 't' + word.word

	word.removedPrefix = 'pe'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut