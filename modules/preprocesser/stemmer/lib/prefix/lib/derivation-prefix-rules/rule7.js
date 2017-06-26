//rule 7 : terCerV -> ter-CerV where C!=‘r’

const rule = /^ter([bcdfghjklmnpqstvwxyz])er([aiueo].*)$/

const ruleMatch7 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut7 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)
	
	temp.removedPrefix = 'ter'
	return temp
}

exports.ruleMatch = ruleMatch7
exports.ruleCut = ruleCut7