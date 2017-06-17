var katadasar = require("../../../../models/kata-dasar.js").get;

var suffixStemmer = function(word){
	/* 
	Akan ada dua fase
	Fase pertama adalah pengecekan dan penghapusan Inflection Suffix -lah dan -kah
	Fase kedua adalah pengecekan dan penghapusan Inflectional Possessive Pronoun  (-ku, -mu, -nya)
	Fase kedua selalu dijalankan setelah fase pertama
	Fase kedua dapat dijalankan tanpa perduli dijalankan atau tidaknya fase pertama
	*/
	
	/* FASE I */
	if (word.word.match(/lah$/)){
		word.word.replace(/lah$/, "");
		word.removedSuffix = "lah";
	}
	else if (word.word.match(/kah$/)){
		word.word.replace(/kah$/, "");
		word.removedSuffix = "kah";
	}
	
	/* FASE II */
	if (word.word.match(/ku$/)){
		word.word.replace(/ku$/, "");
		word.removedSuffix = "ku";
	}
	else if (word.word.match(/mu$/)){
		word.word.replace(/mu$/, "");
		word.removedSuffix = "mu";
	}
	else if (word.word.match(/nya$/)){
		word.word.replace(/nya$/, "");
		word.removedSuffix = "nya";
	}
	
	return word;
}
module.exports = suffixStemmer;