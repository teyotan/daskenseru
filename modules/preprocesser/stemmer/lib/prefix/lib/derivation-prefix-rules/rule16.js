//rule 16 : meng{g|h|q|k} -> meng-{g|h|q|k}

const rule = /^meng([ghqk])(.*)$/

const ruleMatch16 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut16 = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(4)

	temp.removedPrefix = 'meng'
	return temp
}

exports.ruleMatch = ruleMatch16
exports.ruleCut = ruleCut16