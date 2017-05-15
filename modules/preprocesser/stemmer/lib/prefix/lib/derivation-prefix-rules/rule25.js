//rule 25 : pem{b|f|v} -> pem-{b|f|v}

const rule = /^pem([bfv])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)

	word.removedPrefix = 'pem'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut