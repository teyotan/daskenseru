//rule 15a :menV -> me-nV

const rule = /^men([aiueo])(.*)$/

const ruleMatch15a = function(word){
	return word.match(rule) ? true : false
}

const ruleCut15a = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'me'
	return temp
}

exports.ruleMatch = ruleMatch15a
exports.ruleCut = ruleCut15a