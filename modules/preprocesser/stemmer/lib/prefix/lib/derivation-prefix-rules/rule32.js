//rule 32 : pelV -> pe-lV 
//exception: pelajar -> ajar

const rule = /^pel([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	if (word.word = 'pelajar'){
		word.word = word.word.slice(3)
		
		word.removedPrefix = 'pel'
		return word
	}
	
	word.word = word.word.slice(2)

	word.removedPrefix = 'pe'
	return word
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut