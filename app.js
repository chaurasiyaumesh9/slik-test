var express = require('express');
var app = express();
var path = require('path');
var morgan       = require('morgan');
var port = process.env.port || 3000;

app.use(morgan('dev')); // log every request to the console
app.use(express.static( path.join(__dirname + '/app')));

app.use('/', express.static(__dirname + '/app') ); 
app.use('/bower_components',  express.static(path.join(__dirname + '/bower_components')));

app.listen(port, function(){
	console.log('site running on port '+port+'.');
});

