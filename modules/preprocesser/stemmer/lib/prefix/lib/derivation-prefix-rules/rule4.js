//rule 4 : belajar -> bel-ajar

const rule = /^berlajar(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'bel'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut