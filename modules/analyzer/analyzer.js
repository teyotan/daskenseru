var fs = require("fs");

var exports = module.exports = {}; // object lemparan
	

exports.analyze = function(arr){
	arr[-1] = {"word": ".", "tag": "O"};
	
	arr.forEach(function(element, index, array){
		array[index] = {"word": element, "tag": "O"};
		
		/* Pemisahan kandidat entity dan others */
		if(array[index-1].word == "." && array[index-1].tag == "O"){
			if(!exports.isCommonWords(array[index])){
				array[index].tag = "NE";
			}
		}
		else if(array[index].word.match(/^[A-Z]/)){
			array[index].tag = "NE";
		}
		else if (array[index].word.match(/[0-9]$/)){
			array[index].tag = "NE";
		}
		else if((array[index].word == ".") && (array[index-1].tag != "O")){
			array[index].tag = "NE";
		}
		
		
		/* Tagging terhadap kandidat entity */
		if (array[index].tag == "NE"){
			if(exports.isLocation(array[index])){
				array[index] = exports.tagLocation(array, index);
			}
			else if(exports.isOrganization(array[index])){
				array[index] = exports.tagOrganization(array, index);
			}
			else if(exports.isCurrency(array[index], array[index-1])){
				array[index] = exports.tagCurrency(array, index);
			}
			else if(exports.isTime(array[index])){
				array[index] = exports.tagTime(array, index);
			}
			else if(exports.isPerson(array[index], array[index-1])){
				array[index] = exports.tagPerson(array, index);
			}
			else{
				array[index].tag = "O";
			}
		}
	});
	
	return arr;
};

/* VERIFIKASI LOGIK ENTITAS */
exports.isPerson = function(token, prev){
/* I.S. token adalah array[index], prev adalah array[index-1] */

	var stats;
	if (token.word.match(/^[A-Z]/)){
		stats = true;
	}
	else if(prev.word.match(/^[A-Z]$/)){
		stats = true;
	}
	else{
		stats = false;
	}
	return stats;
}

exports.isLocation = function(token){
	
	return 0;
}

exports.isOrganization = function(token){
	
	return 0;
}

exports.isCommonWords = function(token){
	
	return 0;
}

exports.isTime = function(token){
/* I.S. token adalah array[index], prev adalah array[index-1] */

	var stats;
	
	if ((token.word == "WIB") || (token.word == "WITA") || (token.word == "WIT")){
		stats = true;
	}
	else {
		if (token.word.match(/^(?:5[0-9]|[0-4]?[0-9])(\.(?:5[0-9]|[0-4]?[0-9])){2}$/)){ // FORMAT HH.MM.DD
			stats = true;
		}
		else if (token.word.match(/^(?:5[0-9]|[0-4]?[0-9]).(?:5[0-9]|[0-4]?[0-9])$/)){ // FORMAT HH.MM
			stats = true;
		}
		else {
			stats = false;
		}
	}
	return stats;
}

exports.isCurrency = function(token){
/* I.S. token adalah array[index], prev adalah array[index-1] */

	var stats;

	if ((token.word == "IDR") || (token.word == "USD")){
		stats = true;
	}
	else {
		if ((token.word.match(/^[R][p]/)) || (token.word.match(/^[$]/))){
		stats = true;
		}
		else if (token.word.match(/^((([0-9][0-9])?[0-9].))*(([0-9][0-9])?[0-9])$/)){ // Regex Currency
			stats = true;
		}
		else {
			stats = false;
		}
	}
	
	return stats;
}

/* FUNGSI TAGGING */
exports.tagPerson = function(arr, i){
 
	arr[i].tag = "B_PER";
	if ((arr[i-1].tag == "B_PER") || (arr[i-1].tag == "I_PER")){
		arr[i].tag = "I_PER";
	}
	
	return arr[i];
}

exports.tagLocation = function(arr, i){
 
	arr[i].tag = "B_LOC";
	if ((arr[i-1].tag == "B_LOC") || (arr[i-1].tag == "I_LOC")){
		arr[i].tag = "I_LOC";
	}
	
	return arr[i];
}

exports.tagOrganization = function(arr, i){
 
	arr[i].tag = "B_ORG";
	if ((arr[i-1].tag == "B_ORG") || (arr[i-1].tag == "I_ORG")){
		arr[i].tag = "I_ORG";
	}
	
	return arr[i];
}


exports.tagTime = function(arr, i){
 
	arr[i].tag = "B_TME";
	if (arr[i-1].tag == "B_TME"){ // Pemeriksaan WIB WITA WIT
		arr[i].tag = "I_TME";
	}
	
	return arr[i];
}

exports.tagCurrency = function(arr, i){
 
	arr[i].tag = "B_CUR";
	if ((arr[i-1].tag == "B_CUR") || (arr[i-1].tag == "I_CUR")){
		arr[i].tag = "I_CUR";
	}
	
	return arr[i];
}