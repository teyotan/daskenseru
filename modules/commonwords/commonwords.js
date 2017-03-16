var fs = require("fs");

var text = fs.createReadStream('modules/commonwords/commonwords.txt');

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

exports.array = array; // Bagian ngeluarin