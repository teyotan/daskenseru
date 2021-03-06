//rule 14 :men{c|d|j|z} -> men-{c|d|j|z}

const rule = /^men([cdjz])(.*)$/

const ruleMatch14 = function(word){
	return word.match(rule) ? true : false
}

const ruleCut14 = function(word){
	let temp = Object.assign({}, word)

	temp.word = temp.word.slice(3)

	temp.removedPrefix = 'men'
	return temp
}

exports.ruleMatch = ruleMatch14
exports.ruleCut = ruleCut14