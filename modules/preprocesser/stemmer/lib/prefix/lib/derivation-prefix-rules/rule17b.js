//rule 17b : mengV -> meng-kV

const rule = /^meng([aiueo])(.*)$/

const ruleMatch17b = function(word){
	return word.match(rule) ? true : false
}

const ruleCut17b = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(4)
	temp.word = 'k' + temp.word

	temp.removedPrefix = 'meng'
	return temp
}

exports.ruleMatch = ruleMatch17b
exports.ruleCut = ruleCut17b