//rule 2 : berCAP -> ber-CAP where C != 'r' AND P != 'er'

const rule = /^ber([bcdfghjklmnpqstvwxyz])([a-z])(?!er)(.*)$/

const ruleMatch2 = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut2 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'ber'
	return temp
}

exports.ruleMatch = ruleMatch2
exports.ruleCut = ruleCut2