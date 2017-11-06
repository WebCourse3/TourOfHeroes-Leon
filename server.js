var app = require('express')();
var heroesRouter = require('./js/heroesRouter');
var express = require('express');
var app = express();
var heroes = require('./js/heroes');



//
// var http = require('http').Server(app);
// http.listen(3000, function(){
// 	console.log('listening on *:3000');
// });

app.use(express.static('C:\\Users\\Jbt\\Desktop\\TOH testing'));
app.use("/heroes",heroesRouter);



app.get('/', function (req, res) {res.send('hello world')});

module.exports = app.listen(3000,function() {
	console.log('Server started on port 3000');
});