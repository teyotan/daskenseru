//rule 4 : belajar -> bel-ajar

const rule = /^berlajar(.*)$/

const ruleMatch4 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut4 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'bel'
	return temp
}

exports.ruleMatch = ruleMatch4
exports.ruleCut = ruleCut4