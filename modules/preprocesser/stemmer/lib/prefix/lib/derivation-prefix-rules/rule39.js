//rule 39 : seA -> se-A

const rule = /^se(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'se'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut