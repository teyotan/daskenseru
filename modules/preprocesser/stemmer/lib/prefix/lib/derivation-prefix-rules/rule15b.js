//rule 15b :menV -> me-tV

const rule = /^men([aiueo])(.*)$/

const ruleMatch15b = function(word){
	return word.match(rule) ? true : false
}

const ruleCut15b = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)
	temp.word = 't' + temp.word

	temp.removedPrefix = 'me'
	return temp
}

exports.ruleMatch = ruleMatch15b
exports.ruleCut = ruleCut15b