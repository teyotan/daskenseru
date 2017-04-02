var locationsprepost = require('../../../models/locationsprepost.js').get;
var locations = require('../../../models/locations.js').get;

var isLocation = function(arr, i){
	if (arr[i].word.match(/^[A-Z]/) && arr[i].tag == "NE"){
		if ((arr[i-1].tag == "B_LOC") || (arr[i-1].tag == "I_LOC")){
			return true;
		}
	}

	return (
	locationsprepost.indexOf(arr[i].word.toLowerCase()) 
	+ locations.indexOf(arr[i].word.toLowerCase())
	+ 2);
}

var tagLocation = function(arr, i){
	arr[i].tag = (arr[i-1].tag == "B_LOC") || (arr[i-1].tag == "I_LOC") 
	? "I_LOC" 
	: "B_LOC";
}

exports.isLocation = isLocation;

exports.tagLocation = tagLocation;
