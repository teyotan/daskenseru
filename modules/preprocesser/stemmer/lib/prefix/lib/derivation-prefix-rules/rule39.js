//rule 39 : seA -> se-A

const rule = /^se(.*)$/

const ruleMatch39 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut39 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'se'
	return temp
}

exports.ruleMatch = ruleMatch39
exports.ruleCut = ruleCut39