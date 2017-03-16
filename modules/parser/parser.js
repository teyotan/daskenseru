var fs = require("fs");

var exports = module.exports = {}; // object lemparan
	

exports.split2char = function(str){
	
	var arr = str.split("");
	return arr;
};

exports.split2word = function(str){
	
	var arrTemp = exports.split2char(str);
	var arr = [];
	var word = "";
	var i = 0;
	
	arrTemp.forEach(function(element){
		if (element.match(" ")){
			arr[i] = word;
			i++;
			word = "";
		}
		else{
			if (element.match(/^([A-Z]|[a-z]|[0-9])/)){ // Karakter Latin
				word += element;
			}
			else{ // Tanda Baca
				if (word.match(/([0-9])$/)){
					word += element;
				}
				else{
					arr[i] = word;
					i++;
					word = element;
				}
				
			}
		}
	});
	
	arr[i] = word;
	
	return arr;
}