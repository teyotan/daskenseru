//rule 20 : pe{w|y}V -> pe-{w|y}V

const rule = /^pe([wy])([aiueo])(.*)$/

const ruleMatch20 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut20 = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'pe'
	return temp
}

exports.ruleMatch = ruleMatch20
exports.ruleCut = ruleCut20