//rule 35 : terC1erC2 -> ter-C1erC2 where C1!=‘r’

const rule = /^ter([bcdfghjklmnpqstvwxyz])(er)([bcdfghjklmnpqrstvwxyz])(.*)$/

const ruleMatch35 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut35 = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'ter'
	return temp
}

exports.ruleMatch = ruleMatch35
exports.ruleCut = ruleCut35