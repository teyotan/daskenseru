//rule 18 : menyV -> meny-sV

const rule = /^meny([aiueo])(.*)$/

const ruleMatch18 = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut18 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(4)
	temp.word = 's' + temp.word

	temp.removedPrefix = 'meny'
	return temp
}

exports.ruleMatch = ruleMatch18
exports.ruleCut = ruleCut18