//rule 31 : penyV -> peny-sV

const rule = /^peny([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(4)
	word.word = 's' + word.word

	word.removedPrefix = 'peny'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut