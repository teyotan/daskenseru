//rule 11 : mem{b|f|v} -> mem-{b|f|v}

const rule = /^mem([bfv])(.*)$/

const ruleMatch11 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut11 = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)
	
	temp.removedPrefix = 'mem'
	return temp
}

exports.ruleMatch = ruleMatch11
exports.ruleCut = ruleCut11