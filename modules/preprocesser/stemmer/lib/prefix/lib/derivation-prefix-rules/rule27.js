//rule 27 : pen{c|d|j|z} -> pen-{c|d|j|z}

const rule = /^pen([cdjz])(.*)$/

const ruleMatch = function(word){
	return word.word.match(rule) ? true : false
}

const ruleCut = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'pen'
	return temp
}

exports.ruleMatch = ruleMatch
exports.ruleCut = ruleCut