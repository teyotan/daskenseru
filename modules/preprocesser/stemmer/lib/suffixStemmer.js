var rootWordChecker = require("./rootWordChecker.js");

var suffixStemmer = function(word){
	/* 
	Akan ada dua fase
	Fase pertama adalah pengecekan dan penghapusan Inflection Suffix -lah dan -kah
	Fase kedua adalah pengecekan dan penghapusan Inflectional Possessive Pronoun  (-ku, -mu, -nya)
	Fase ketiga adalah pengecekan dan penghapusan Derivation Suffix (-i, -an, -kan)
	
	Fase kedua selalu dijalankan setelah fase pertama
	Fase kedua dapat dijalankan tanpa perduli dijalankan atau tidaknya fase pertama
	Fase ketiga selalu menyimpan suffix yang dihapus
	*/
	
	var temp;
	word = rootWordChecker(word);
	
	if (!word.found){
		/* FASE I */
		if (word.word.match(/lah$/)){
			temp = word.word.replace(/lah$/, "");
		}
		else if (word.word.match(/kah$/)){
			temp = word.word.replace(/kah$/, "");
		}
	}
	
	/* FASE II */
	if (!word.found){
		if (word.word.match(/ku$/)){
			temp = word.word.replace(/ku$/, "");
		}
		else if (word.word.match(/mu$/)){
			temp = word.word.replace(/mu$/, "");
		}
		else if (word.word.match(/nya$/)){
			temp = word.word.replace(/nya$/, "");
			// word.removedSuffix = "nya" + word.removedSuffix;
		}
	}
	
	if (temp){
		word.word = temp; // Simpan hasil pemotongan
	}
	
	word = rootWordChecker(word);
	
	/* FASE III */
	if (!word.found){
		if (word.word.match(/i$/)){
			temp = word.word.replace(/i$/, "");
			word.removedSuffix = "i";
		}
		else if (word.word.match(/an$/)){
			temp = word.word.replace(/an$/, "");
			word.removedSuffix = "an";
		}
		else if (word.word.match(/kan$/)){
			temp = word.word.replace(/kan$/, "");
			word.removedSuffix = "kan";
		}
	}
	
	if (temp){
		word.word = temp; // Simpan hasil pemotongan
	}
	
	word = rootWordChecker(word);
		
	return word;
}
module.exports = suffixStemmer;