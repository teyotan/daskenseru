//rule 16 : meng{g|h|q|k} -> meng-{g|h|q|k}

const rule = /^meng([ghqk])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(4)
	word.word = 'p' + word.word

	word.removedPrefix = 'meng'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut