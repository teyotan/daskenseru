//rule 29 : peng{g|h|q} -> peng-{g|h|q}

const rule = /^peng([ghq])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(4)

	temp.removedPrefix = 'peng'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut