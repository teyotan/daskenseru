var locationsprepost = require('../../../models/locationsprepost.js').get;
var locations = require('../../../models/locations.js').get;

var isLocation = function(arr, i){
	if (arr[i].word.match(/^[A-Z]/) // Check apakah diawali huruf (bukan titik)
	&& arr[i].tag == "NE" // Check apakah dia named entity
	&& (arr[i-1].tag == "B_LOC" || arr[i-1].tag == "I_LOC" || arr[i-1].tag == "O")){ // Check apakah kata sebelumnya merupakan lokasi atau Other
		if ((arr[i-1].tag == "B_LOC") || (arr[i-1].tag == "I_LOC")){
			return true;
		}
	}

	if (arr[i-1].tag == "B_LOC" || arr[i-1].tag == "I_LOC" || arr[i-1].tag == "O"){ // Check apakah kata sebelumnya merupakan lokasi atau Other
		return (
		locationsprepost.indexOf(arr[i].word.toLowerCase()) 
		+ locations.indexOf(arr[i].word.toLowerCase())
		+ 2);
	} else {
		return 0;
	}
}

var tagLocation = function(arr, i){
	arr[i].tag = (arr[i-1].tag == "B_LOC") || (arr[i-1].tag == "I_LOC") 
	? "I_LOC" 
	: "B_LOC";
}

exports.isLocation = isLocation;

exports.tagLocation = tagLocation;
