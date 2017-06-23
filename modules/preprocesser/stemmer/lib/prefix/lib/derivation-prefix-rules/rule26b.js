//rule 26b : pem{rV|V} -> pe-p{rV|V}

const rule = /^pem(r)?([aiueo])(.*)$/

const ruleMatch26b = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut26b = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)
	temp.word = 'p' + temp.word

	temp.removedPrefix = 'pe'
	return temp
}

exports.ruleMatch = ruleMatch26b
exports.ruleCut = ruleCut26b