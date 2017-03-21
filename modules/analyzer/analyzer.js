var fs = require("fs");

var exports = module.exports = {}; // object lemparan
	

exports.analyze = function(arr){
	
	arr.forEach(function(element, index, array){
		array[index] = {"word": element, "tag": "O"}
		
		if (!commonWords(array[index])){
			if(isLocation(array[index]){
				array[index] = tagLocation(array, index);
			}
			else if(isOrganization(array[index])){
				array[index] = tagOrganization(array, index);
			}
			else if(isPerson)(array[index])){
				array[index] = tagPerson(array, index);
			}
		}
	});
	
	arr = exports.tagPerson(arr);
	
	return arr;
};

/*
if (array[index].word.match(/^[A-Z]([a-z]|[.]$)/)){
			if(array[index-1] != undefined){
				if(array[(index-1)].word.match(/[.]$/)){
					
				} else {
					array[index].tag = "NE";
				}
			} else {
				array[index].tag = "NE";
			}
		}

*/

exports.isPerson = function(word){
	
	return word.match(/^[A-Z]/);
}

exports.tagPerson = function(arr, i){
 
	array[index].tag = "B_PER";
	
	var temp;
	var i = 0;
	while (arr[i] != undefined){	
		if ((arr[i].tag == "I_PER") && (arr[i + 1].tag == "I_PER")){
			arr[i].tag = "B_PER";
			temp = i+1;
			while (arr[temp] != undefined && arr[temp].tag == "I_PER"){
				temp++;
			}
			i = temp;
		}
		i++;
	};
	
	return arr;
}