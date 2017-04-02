var isPerson = function(arr, i){
	if (arr[i].word.match(/^[A-Z]/) && arr[i].tag == "NE"){
		return true;
	}
	else if(arr[i-1].word.match(/^[A-Z]$/)){
		return true;
	}
	else{
		return false;
	}
}

var tagPerson = function(arr, i){
	arr[i].tag = (arr[i-1].tag == "B_PER") || (arr[i-1].tag == "I_PER") 
	? "I_PER" 
	: "B_PER";
}

exports.isPerson = isPerson;

exports.tagPerson = tagPerson;
