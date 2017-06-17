//rule 36 : peC1erC2 -> pe-C1erC2 where C1!={r|w|y|l|m|n}

const rule = /^pe([bcdfghjkpqstvxz])(er)([bcdfghjklmnpqrstvwxyz])(.*)$/

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