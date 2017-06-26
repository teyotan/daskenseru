//rule 29 : peng{g|h|q} -> peng-{g|h|q}

const rule = /^peng([ghq])(.*)$/

const ruleMatch29 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut29 = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(4)

	temp.removedPrefix = 'peng'
	return temp
}

exports.ruleMatch = ruleMatch29
exports.ruleCut = ruleCut29