//rule 17a : mengV -> meng-V

const rule = /^meng([aiueo])(.*)$/

const ruleMatch17a = function(word){
	return word.match(rule) ? true : false
}

const ruleCut17a = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(4)

	temp.removedPrefix = 'meng'
	return temp
}

exports.ruleMatch = ruleMatch17a
exports.ruleCut = ruleCut17a