//rule 3 : berCAerV -> ber-CAerV where C!=‘r’

const rule = /^ber([bcdfghjklmnpqstvwxyz])([a-z])(er)([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)

	word.removedPrefix = 'ber'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut