//rule 12 :mempe -> mem-pe

const rule = /^mempe(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)
	
	temp.word = temp.word.slice(3)
	
	temp.removedPrefix = 'mem'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut