var fs = require("fs");

var text = fs.createReadStream('assets/commondots.txt');

var array = [];

var remaining = '';

var exportedPromise = new Promise((resolve, reject) => {
	text.on('data', function(data) {
		remaining += data;
		var index = remaining.indexOf('\n');
		var last  = 0;
		while (index > -1) {
			var line = remaining.substring(last, index-1);
			last = index + 1;
			array.push(line.toLowerCase());
			index = remaining.indexOf('\n', last);
		}

		remaining = remaining.substring(last);
	});

	text.on('end', function() {
		if (remaining.length > 0) {
			array.push(remaining.toLowerCase());
			resolve(array);
		}
	});
})

exports.get = exportedPromise; // Bagian ngeluarin