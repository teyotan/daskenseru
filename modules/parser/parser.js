var fs = require("fs");
	
var splitToWord = function(str){
	var arrTemp = str.split("");
	var arr = [];
	var word = "";
	var i = 0;
	
	arrTemp.forEach(function(element){
		if (element.match(/\s/)){
			if (word !== ""){
				arr[i] = word;
				i++;
			}
			word = "";
		}
		else{
			if (element.match(/^([A-Z]|[a-z]|[0-9])/)){ // Karakter Latin
				word += element;
			}
			else{ // Tanda Baca
				if (word.match(/([0-9])$/) && element == "."){
					if (!word.match(/^([0-9]){4}$/)){
						word += element;
					}
					else{
						arr[i] = word;
						i++;
						word = element;
					}
				} else if(word.match(/([,])$/) && element == "-"){
					word += element;
				} else if(word.match(/^([^0-9])/) && word.match(/([0-9]$)/) && element == ","){
					word += element;
				} else{
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


exports.splitToWord = splitToWord;