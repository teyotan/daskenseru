var isTime = function(arr, i){
/* I.S. token adalah array[index], prev adalah array[index-1] */

	var stats;
	
	if ((arr[i].word == "WIB") || (arr[i].word == "WITA") || (arr[i].word == "WIT")){
		stats = true;
	}
	else {
		if (arr[i].word.match(/^(?:5[0-9]|[0-4]?[0-9])(\.(?:5[0-9]|[0-4]?[0-9])){2}$/)){ // FORMAT HH.MM.DD
			stats = true;
		}
		else if (arr[i].word.match(/^(?:5[0-9]|[0-4]?[0-9]).(?:5[0-9]|[0-4]?[0-9])$/)){ // FORMAT HH.MM
			stats = true;
		}
		else {
			stats = false;
		}
	}
	return stats;
}

var tagTime = function(arr, i){
 
	arr[i].tag = "B_TME";
	if (arr[i-1].tag == "B_TME"){ // Pemeriksaan WIB WITA WIT
		arr[i].tag = "I_TME";
	}
	
	return arr[i];
}

exports.isTime = isTime;

exports.tagTime = tagTime;