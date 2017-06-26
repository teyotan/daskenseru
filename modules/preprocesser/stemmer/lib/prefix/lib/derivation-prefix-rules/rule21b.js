//rule 21b : perV -> pe-rV

const rule = /^per([aiueo])(.*)$/

const ruleMatch21b = function(word){
	return word.match(rule) ? true : false
}

const ruleCut21b = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'pe'
	return temp
}

exports.ruleMatch = ruleMatch21b
exports.ruleCut = ruleCut21b