//rule 13b :mem{rV|V} -> me-p{rV|V}

const rule = /^mem(r)?([aiueo])(.*)$/

const ruleMatch13b = function(word){
	return word.match(rule) ? true : false
}

const ruleCut13b = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(3)
	temp.word = 'p' + temp.word

	temp.removedPrefix = 'me'
	return temp
}

exports.ruleMatch = ruleMatch13b
exports.ruleCut = ruleCut13b