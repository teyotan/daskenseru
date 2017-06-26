//rule 36 : peC1erC2 -> pe-C1erC2 where C1!={r|w|y|l|m|n}

const rule = /^pe([bcdfghjkpqstvxz])(er)([bcdfghjklmnpqrstvwxyz])(.*)$/

const ruleMatch36 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut36 = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'pe'
	return temp
}

exports.ruleMatch = ruleMatch36
exports.ruleCut = ruleCut36