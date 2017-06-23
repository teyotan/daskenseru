//rule 6b : terV -> te-rV

const rule = /^ter([aiueo].*)$/

const ruleMatch6b = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut6b = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(2)
	
	temp.removedPrefix = 'te'
	return temp
}

exports.ruleMatch = ruleMatch6b
exports.ruleCut = ruleCut6b