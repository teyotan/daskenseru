var fs = require("fs");

var exports = module.exports = {}; // object lemparan
	

exports.analyze = function(arr){
	
	arr.forEach(function(element, index, array){
		array[index] = {"word": element, "tag": "O"}
		
		if (array[index].word.match(/^[A-Z]([a-z]|[.]$)/)){
			if(array[index-1] != undefined){
				if(array[(index-1)].word.match(/[.]$/)){
					array[index].tag = "START";
				} else {
					array[index].tag = "NE";
				}
			} else {
				array[index].tag = "START";
			}
		}
	});
	
	return arr;
};

