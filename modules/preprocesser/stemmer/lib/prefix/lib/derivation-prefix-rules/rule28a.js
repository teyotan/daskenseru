//rule 28a : penV -> pe-nV

const rule = /^pen([aiueo])(.*)$/

const ruleMatch28a = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut28a = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'pe'
	return temp
}

exports.ruleMatch = ruleMatch28a
exports.ruleCut = ruleCut28a