//rule 13a :mem{rV|V} -> me-m{rV|V}

const rule = /^mem(r)?([aiueo])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(2)
	
	temp.removedPrefix = 'me'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut