//rule 25 : pem{b|f|v} -> pem-{b|f|v}

const rule = /^pem([bfv])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'pem'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut