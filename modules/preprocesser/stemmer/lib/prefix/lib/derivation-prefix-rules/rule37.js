//rule 37 : diA -> di-A

const rule = /^di(.*)$/

const ruleMatch37 = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut37 = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'di'
	return temp
}

exports.ruleMatch = ruleMatch37
exports.ruleCut = ruleCut37