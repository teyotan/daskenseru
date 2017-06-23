//rule 38 : keA -> ke-A

const rule = /^ke(.*)$/

const ruleMatch38 = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut38 = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'se'
	return temp
}

exports.ruleMatch = ruleMatch38
exports.ruleCut = ruleCut38