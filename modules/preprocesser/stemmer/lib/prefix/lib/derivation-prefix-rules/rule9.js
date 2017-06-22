//rule 9 : teC1erC2 -> te-C1erC2 where C1!=‘r’

const rule = /^te([bcdfghjklmnpqstvwxyz])er([bcdfghjklmnpqrstvwxyz])(.*)$/

const ruleMatch9 = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut9 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(2)
	
	temp.removedPrefix = 'te'
	return temp
}

exports.ruleMatch = ruleMatch9
exports.ruleCut = ruleCut9