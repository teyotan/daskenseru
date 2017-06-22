//rule 34 : peCP -> pe-CP where C!={r|w|y|l|m|n} and P!=‘er’

const rule = /^pe([bcdfghjkpqstvxz])(?!er)(.*)$/

const ruleMatch34 = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut34 = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'pe'
	return temp
}

exports.ruleMatch = ruleMatch34
exports.ruleCut = ruleCut34