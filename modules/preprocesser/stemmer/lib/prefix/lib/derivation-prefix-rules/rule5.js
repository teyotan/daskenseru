//rule 5 : beC1erC2 -> be-C1erC2 where C1 != 'r'

const rule = /^be([bcdfghjklmnpqstvwxyz])(er[bcdfghjklmnpqrstvwxyz])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(2)

	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut