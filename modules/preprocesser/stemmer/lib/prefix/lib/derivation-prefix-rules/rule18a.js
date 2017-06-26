//rule 18 : menyV -> meny-sV

const rule = /^meny([aiueo])(.*)$/

const ruleMatch18a = function(word){
	return word.match(rule) ? true : false
}

const ruleCut18a = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(4)
	temp.word = 's' + temp.word

	temp.removedPrefix = 'meny'
	return temp
}

exports.ruleMatch = ruleMatch18a
exports.ruleCut = ruleCut18a