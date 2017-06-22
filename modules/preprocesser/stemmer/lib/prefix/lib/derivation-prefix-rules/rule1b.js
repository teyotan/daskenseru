//rule 1b : berV -> be-rV

const rule = /^ber([aiueo].*)$/

const ruleMatch1b = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut1b = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(2)
	
	temp.removedPrefix = 'be'
	return temp
}

exports.ruleMatch = ruleMatch1b
exports.ruleCut = ruleCut1b