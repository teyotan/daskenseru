//rule 13a :mem{rV|V} -> me-m{rV|V}

const rule = /^mem(r)?([aiueo])(.*)$/

const ruleMatch13a = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut13a = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(2)
	
	temp.removedPrefix = 'me'
	return temp
}

exports.ruleMatch = ruleMatch13a
exports.ruleCut = ruleCut13a