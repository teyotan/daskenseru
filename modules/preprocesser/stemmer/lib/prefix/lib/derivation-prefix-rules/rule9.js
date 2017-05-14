//rule 9 : teC1erC2 -> te-C1erC2 where C1!=‘r’

const rule = /^te([bcdfghjklmnpqstvwxyz])er([bcdfghjklmnpqrstvwxyz])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(2)
	
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut