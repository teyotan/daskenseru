//rule 6a : terV -> ter-V

const rule = /^ter([aiueo].*)$/

const ruleMatch6a = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut6a = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'ter'
	return temp
}

exports.ruleMatch = ruleMatch6a
exports.ruleCut = ruleCut6a