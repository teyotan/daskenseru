//rule 23 : perCAP -> per-CAP where C!=‘r’ and P!=‘er’

const rule = /^per([bcdfghjklmnpqstvwxyz])([a-z])(?!er)(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'per'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut