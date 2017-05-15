//rule 29 : peng{g|h|q} -> peng-{g|h|q}

const rule = /^peng([ghq])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(4)

	word.removedPrefix = 'peng'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut