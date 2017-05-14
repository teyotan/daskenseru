//rule 18 : menyV -> meny-sV

const rule = /^meny([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(4)
	word.word = 's' + word.word
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut