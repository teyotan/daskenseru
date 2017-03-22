var organizationsprepost = require('../../../models/organizationsprepost.js').get;
var organizations = require('../../../models/organizations.js').get;

var isOrganization = function(arr, i){
	if (arr[i].word.match(/^[A-Z]/) && arr[i].tag == "NE"){
		if ((arr[i-1].tag == "B_ORG") || (arr[i-1].tag == "I_ORG")){
			return true;
		}
	}

	return (
	organizationsprepost.indexOf(arr[i].word.toLowerCase()) 
	+ organizations.indexOf(arr[i].word.toLowerCase())
	+ 2);
}

var tagOrganization = function(arr, i){
	arr[i].tag = (arr[i-1].tag == "B_ORG") || (arr[i-1].tag == "I_ORG") 
	? "I_ORG" 
	: "B_ORG";
}

exports.isOrganization = isOrganization;

exports.tagOrganization = tagOrganization;
