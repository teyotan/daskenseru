var isCurrency = function(arr, i){

	if ((arr[i].word == "IDR") || (arr[i].word == "USD")){
		return true;
	} else {
		if ((arr[i].word.match(/^[R][p]/)) || (arr[i].word.match(/^[$]/))){
			return true;
		}
		else if (arr[i].word.match(/^((([0-9][0-9])?[0-9].))*(([0-9][0-9])?[0-9])$/)){ // Regex Currency
			return true;
		}
		else {
			return false;
		}
	}
	return false;
}

var tagCurrency = function(arr, i){
 
	arr[i].tag = "B_CUR";
	if ((arr[i-1].tag == "B_CUR") || (arr[i-1].tag == "I_CUR")){
		arr[i].tag = "I_CUR";
	}
	
	return arr[i];
}

exports.isCurrency = isCurrency;

exports.tagCurrency = tagCurrency;