var commonwords = require('../../../models/commonwords.js').get;

var isCommon = function(arr, i){
	return commonwords.indexOf(arr[i].word.toLowerCase()) + 1;
}

exports.isCommon = isCommon;