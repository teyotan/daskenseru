//rule 8 : terCP -> ter-CP where C!=‘r’ and P!=‘er’

const rule = /^ter([bcdfghjklmnpqstvwxyz])(?!er)(.*)$/

const ruleMatch8 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut8 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)
	
	temp.removedPrefix = 'ter'
	return temp
}

exports.ruleMatch = ruleMatch8
exports.ruleCut = ruleCut8