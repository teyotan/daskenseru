//rule 11 : mem{b|f|v} -> mem-{b|f|v}

const rule = /^mem([bfv])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	word.word = word.word.slice(3)
	
	word.removedPrefix = 'mem'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut