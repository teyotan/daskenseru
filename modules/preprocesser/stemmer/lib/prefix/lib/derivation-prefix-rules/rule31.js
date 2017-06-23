//rule 31 : penyV -> peny-sV

const rule = /^peny([aiueo])(.*)$/

const ruleMatch31 = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut31 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(4)
	temp.word = 's' + temp.word

	temp.removedPrefix = 'peny'
	return temp
}

exports.ruleMatch = ruleMatch31
exports.ruleCut = ruleCut31