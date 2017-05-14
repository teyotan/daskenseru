//rule 2 : berCAP -> ber-CAP where C != 'r' AND P != 'er'

const rule = /^ber([bcdfghjklmnpqstvwxyz])([a-z])(?!er)(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)

	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut