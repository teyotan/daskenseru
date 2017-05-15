//rule 14 :men{c|d|j|z} -> men-{c|d|j|z}

const rule = /^men([cdjz])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)

	word.removedPrefix = 'men'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut