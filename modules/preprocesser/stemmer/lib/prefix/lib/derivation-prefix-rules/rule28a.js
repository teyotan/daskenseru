//rule 28a : penV -> pe-nV

const rule = /^pen([aiueo])(.*)$/

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