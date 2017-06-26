//rule 30a : pengV -> peng-V

const rule = /^peng([aiueo])(.*)$/

const ruleMatch30a = function(word){
	return word.match(rule) ? true : false
}

const ruleCut30a = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(4)

	temp.removedPrefix = 'peng'
	return temp
}

exports.ruleMatch = ruleMatch30a
exports.ruleCut = ruleCut30a