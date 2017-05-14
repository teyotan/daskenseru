//rule 7 : terCerV -> ter-CerV where C!=‘r’

const rule = /^ter([bcdfghjklmnpqstvwxyz])er([aiueo].*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)
	
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut