//rule 32 : pelV -> pe-lV 
//exception: pelajar -> ajar

const rule = /^pel([aiueo])(.*)$/

const ruleMatch32 = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut32 = function(word){
	let temp = Object.assign({}, word)

	if (temp.word = 'pelajar'){
		temp.word = temp.word.slice(3)
		
		temp.removedPrefix = 'pel'
		return temp
	}
	
	temp.word = temp.word.slice(2)

	temp.removedPrefix = 'pe'
	return temp
}

exports.ruleMatch = ruleMatch32
exports.ruleCut = ruleCut32