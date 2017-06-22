var express = require('express')
var app = express()

var config = require('./config')()

var home = require('./routes/home')

app.use('/', home)

app.listen(80, function () {
 	console.log('App running on port 80')
})