//rule 17b : mengV -> meng-kV

const rule = /^meng([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(4)
	temp.word = 'k' + temp.word

	temp.removedPrefix = 'meng'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut