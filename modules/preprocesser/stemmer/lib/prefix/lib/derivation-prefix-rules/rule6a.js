//rule 6a : terV -> ter-V

const rule = /^ter([aiueo].*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)

	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut