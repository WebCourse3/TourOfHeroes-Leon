var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var router = express.Router();

var heroes =
	[
		{id: 1, name:"spiderman"},
		{id: 2, name:"batman"},
		{id: 3, name:"gispan"}
	];

app.get('/heroes/:id/:name', function (req, res) {
	res.send(req.params)

});

app.get('/heroes', function (req, res) {
	res.send(heroes);

});

app.get('/heroes/:id', function (req, res) {
	res.send(heroes[(req.params.id)-1]);

});

app.put('/heroes/:id/:name', function (req, res) {
	res.send(changedHero);

	heroes[req.params.id].name = req.params.name;
	var changedHero = heroes[req.params.id].name;
});

app.post('/heroes/:id/:name', function (req, res) {
	res.send("new user added");
	var newId = req.params.id;
	var newName = req.params.name;
	for(i=0;i<=heroes;i++){
		if(newId != heroes[i].id && newName != heroes[i].name){
			var heroBlock = {"id":newId,"name":newName};
			heroes.push(heroBlock);
		}
	}


});



app.delete('/heroes/:id', function (req, res) {
	res.send("user deleted");
	var selectedUser = req.params.id;
	delete heroes[selectedUser];

});



http.listen(3000, function(){
	console.log('listening on *:3000');
});


