const rule = /^di(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(2)

	word.removedPrefix = 'di'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut