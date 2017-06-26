//rule 26a : pem{rV|V} -> pe-m{rV|V}

const rule = /^pem(r)?([aiueo])(.*)$/

const ruleMatch26a = function(word){
	return word.match(rule) ? true : false
}

const ruleCut26a = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'pe'
	return temp
}

exports.ruleMatch = ruleMatch26a
exports.ruleCut = ruleCut26a