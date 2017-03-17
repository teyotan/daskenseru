var fs = require("fs");

var text = fs.createReadStream('assets/commonwords.txt');

var array = [];

var pushToArray = function(data) {
	array.push(data);
}

var readLines = function(input, func) {
	var remaining = '';

	input.on('data', function(data) {
		remaining += data;
		var index = remaining.indexOf('\n');
		var last  = 0;
		while (index > -1) {
			var line = remaining.substring(last, index-1);
			last = index + 1;
			func(line);
			index = remaining.indexOf('\n', last);
		}

		remaining = remaining.substring(last);
	});

	input.on('end', function() {
		if (remaining.length > 0) {
			func(remaining);
		}
	});
}

var commonwords = readLines(text, pushToArray);

<<<<<<< HEAD:modules/commonwords/commonwords.js
exports.array = array; // Bagian ngeluarin
=======
exports.get = array; // Bagian ngeluarin
>>>>>>> 08582a2e333a8a9ce613c761cd739c098c58880a:models/commonwords.js
