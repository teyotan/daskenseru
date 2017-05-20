//rule 1a : berV -> ber-V

const rule = /^ber([aiueo].*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'ber'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut