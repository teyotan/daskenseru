const fs = require("fs");
const readline = require("readline");
// const text = 'assets/kata-dasar.txt';

const filePath = './assets/inlex.txt/'

var lineReader = readline.createInterface({
  input: fs.createReadStream(filePath)
});

let inlexModel = [];
var startingCharacter;
var tempArr = [];

lineReader.on('line', function (line) {
  var temp = line.replace(/\t/g,' ').split(" ");
  var data = {word: temp[0], tag: temp[1]};
  if (startingCharacter !== data.word[0]){
		if (startingCharacter){
			inlexModel[startingCharacter] = tempArr;
			tempArr = [];
		}
		startingCharacter = data.word[0];
  }
  
  tempArr.push(data);
  
});

// let rootWordDictionary = fs.readdirSync(dictionaryPath)
// rootWordDictionary.forEach(
	// (element, index, array) => {
		// let startingCharacter = element.split("-").pop().split("-").pop().split('.')[0]

		// rootWordModel[startingCharacter] = fs.readFileSync(dictionaryPath + element).toString().replace(/\r\n/g,'\n').split("\n")
	// }
// )

exports.get = inlexModel;