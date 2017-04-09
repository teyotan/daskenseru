var fs = require("fs");

let text = 'assets/commondots.txt';

var remaining = '';

var array = fs.readFileSync(text).toString().replace(/\r\n/g,'\n').split("\n");

exports.get = array; // Bagian ngeluarin