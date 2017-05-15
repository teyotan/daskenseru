const rule = /^se(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(2)

	word.removedPrefix = 'se'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut