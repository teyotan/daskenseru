//rule 4 : belajar -> bel-ajar

const rule = /^berlajar(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)

	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut