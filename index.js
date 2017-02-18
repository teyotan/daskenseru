var express = require('express')
var app = express()

var home = require('./routes/home')

app.use('/', home)

app.listen(80, function () {
 	console.log('Example app listening on port 80!')
})