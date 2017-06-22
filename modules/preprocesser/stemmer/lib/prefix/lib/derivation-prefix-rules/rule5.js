//rule 5 : beC1erC2 -> be-C1erC2 where C1 != 'r'

const rule = /^be([bcdfghjklmnpqstvwxyz])(er[bcdfghjklmnpqrstvwxyz])(.*)$/

const ruleMatch5 = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut5 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'be'
	return temp
}

exports.ruleMatch = ruleMatch5
exports.ruleCut = ruleCut5