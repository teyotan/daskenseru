//rule 23 : perCAP -> per-CAP where C!=‘r’ and P!=‘er’

const rule = /^per([bcdfghjklmnpqstvwxyz])([a-z])(?!er)(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)

	word.removedPrefix = 'per'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut