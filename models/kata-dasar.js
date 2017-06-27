const fs = require("fs");

const text = 'assets/kata-dasar.txt';

const dictionaryPath = './assets/kata-dasar/'

let rootWordModel = {}

let rootWordDictionary = fs.readdirSync(dictionaryPath)
rootWordDictionary.forEach(
	(element, index, array) => {
		let startingCharacter = element.split("-").pop().split("-").pop().split('.')[0]

		rootWordModel[startingCharacter] = fs.readFileSync(dictionaryPath + element).toString().replace(/\r\n/g,'\n').split("\n")
	}
)

const array = fs.readFileSync(text).toString().replace(/\r\n/g,'\n').split("\n");

exports.getdepreciated = array; // Bagian ngeluarin

exports.get = rootWordModel