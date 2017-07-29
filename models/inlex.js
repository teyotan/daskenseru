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
  temp[0] = temp[1].match(/^[a-z]/) ? temp[0]+" "+temp.splice(1, 1)[0] : temp[0];
  var data = {word: temp[0], tag: temp[1]};
  if (startingCharacter !== data.word[0]){
		if (startingCharacter){
			inlexModel[startingCharacter] = tempArr;
		}
		startingCharacter = data.word[0];
		tempArr = inlexModel[startingCharacter] ? inlexModel[startingCharacter] : []; // TERNYATA KAMSUSNYA GA NGURUT ALPABET CUK WKWKWK
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