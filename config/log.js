module.exports = function(){
	var winston = require('winston');

	winston.loggers
		.add("logger", {
			transports: [
				new (winston.transports.File)({
					level: 'silly',
					filename: "./log/app.log",
				})
			]
		})
}