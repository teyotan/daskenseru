//rule 6b : terV -> te-rV

const rule = /^ter([aiueo].*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(2)
	
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut