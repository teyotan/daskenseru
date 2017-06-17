//rule 6a : terV -> ter-V

const rule = /^ter([aiueo].*)$/

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