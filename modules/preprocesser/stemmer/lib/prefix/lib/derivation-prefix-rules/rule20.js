//rule 20 : pe{w|y}V -> pe-{w|y}V

const rule = /^pe([wy])([aiueo])(.*)$/

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