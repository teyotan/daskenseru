//rule 30a : pengV -> peng-kV

const rule = /^peng([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(4)
	temp.word = 'k' + temp.word

	temp.removedPrefix = 'peng'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut