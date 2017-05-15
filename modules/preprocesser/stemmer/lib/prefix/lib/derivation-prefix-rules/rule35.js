//rule 35 : terC1erC2 -> ter-C1erC2 where C1!=‘r’

const rule = /^ter([bcdfghjklmnpqstvwxyz])(er)([bcdfghjklmnpqrstvwxyz])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)

	word.removedPrefix = 'ter'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut