//rule 27 : pen{c|d|j|z} -> pen-{c|d|j|z}

const rule = /^pen([cdjz])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)

	word.removedPrefix = 'pen'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut