//rule 33 : peCerV -> per-erV where C!={r|w|y|l|m|n}

const rule = /^pe([bcdfghjkpqstvxz])(er)([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'per'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut