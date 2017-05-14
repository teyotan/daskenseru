//rule 8 : terCP -> ter-CP where C!=‘r’ and P!=‘er’

const rule = /^ter([bcdfghjklmnpqstvwxyz])(?!er)(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)
	
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut