var katadasar = require("../../../../models/kata-dasar.js").get;

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
	
	/* FASE I */
	if (word.word.match(/lah$/)){
		word.word.replace(/lah$/, "");
	}
	else if (word.word.match(/kah$/)){
		word.word.replace(/kah$/, "");
	}
	
	/* FASE II */
	if (word.word.match(/ku$/)){
		word.word.replace(/ku$/, "");
	}
	else if (word.word.match(/mu$/)){
		word.word.replace(/mu$/, "");
	}
	else if (word.word.match(/nya$/)){
		word.word.replace(/nya$/, "");
		// word.removedSuffix = "nya" + word.removedSuffix;
	}
	
	/* FASE III */
	if (word.word.match(/i$/)){
		word.word.replace(/i$/, "");
		word.removedSuffix = "i";
	}
	else if (word.word.match(/an$/)){
		word.word.replace(/an$/, "");
		word.removedSuffix = "an";
	}
	
	else if (word.word.match(/kan$/)){
		word.word.replace(/kan$/, "");
		word.removedSuffix = "kan";
	}
	
	return word;
}
module.exports = suffixStemmer;