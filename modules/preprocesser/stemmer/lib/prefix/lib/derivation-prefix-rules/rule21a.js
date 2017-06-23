//rule 21a : perV -> per-V

const rule = /^per([aiueo])(.*)$/

const ruleMatch21a = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut21a = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'per'
	return temp
}

exports.ruleMatch = ruleMatch21a
exports.ruleCut = ruleCut21a