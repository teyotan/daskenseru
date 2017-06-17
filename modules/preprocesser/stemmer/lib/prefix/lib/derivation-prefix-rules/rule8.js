//rule 8 : terCP -> ter-CP where C!=‘r’ and P!=‘er’

const rule = /^ter([bcdfghjklmnpqstvwxyz])(?!er)(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)
	
	temp.removedPrefix = 'ter'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut