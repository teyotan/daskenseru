//rule 18b : menyV -> me-nyV
//Rule ngarang, supaya bisa stem 'menyatakan'

const rule = /^meny([aiueo])(.*)$/

const ruleMatch18 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut18 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'me'
	return temp
}

exports.ruleMatch = ruleMatch18
exports.ruleCut = ruleCut18