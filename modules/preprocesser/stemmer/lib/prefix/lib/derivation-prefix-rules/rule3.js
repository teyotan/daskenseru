//rule 3 : berCAerV -> ber-CAerV where C!=‘r’

const rule = /^ber([bcdfghjklmnpqstvwxyz])([a-z])(er)([aiueo])(.*)$/

const ruleMatch3 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut3 = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'ber'
	return temp
}

exports.ruleMatch = ruleMatch3
exports.ruleCut = ruleCut3