//rule 24 : perCAerV -> per-CAerV where C!=‘r’

const rule = /^per([bcdfghjklmnpqstvwxyz])([a-z])(er)([aiueo])(.*)$/

const ruleMatch24 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut24 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'per'
	return temp
}

exports.ruleMatch = ruleMatch24
exports.ruleCut = ruleCut24