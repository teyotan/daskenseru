//rule 14 :men{c|d|j|z} -> men-{c|d|j|z}

const rule = /^men([cdjz])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'men'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut