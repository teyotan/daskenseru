//rule 34 : peCP -> pe-CP where C!={r|w|y|l|m|n} and P!=‘er’

const rule = /^pe([bcdfghjkpqstvxz])(?!er)(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'pe'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut