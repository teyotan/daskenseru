//rule 28b : penV -> pe-tV

const rule = /^pen([aiueo])(.*)$/

const ruleMatch28b = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut28b = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)
	temp.word = 't' + temp.word

	temp.removedPrefix = 'pe'
	return temp
}

exports.ruleMatch = ruleMatch28b
exports.ruleCut = ruleCut28b