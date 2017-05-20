//rule 10 : me{l|r|w|y}V -> me-{l|r|w|y}V

const rule = /^me([lrwy])([aiueo])(.*)$/

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