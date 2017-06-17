//rule 37 : diA -> di-A

const rule = /^di(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'di'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut