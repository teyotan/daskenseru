//rule 7 : terCerV -> ter-CerV where C!=‘r’

const rule = /^ter([bcdfghjklmnpqstvwxyz])er([aiueo].*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)
	
	temp.removedPrefix = 'ter'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut