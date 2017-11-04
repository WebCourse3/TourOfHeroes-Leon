var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var router = express.Router();

http.listen(3000, function(){
    console.log('listening on *:3000');
});

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
	var heroBlock = {id: newId, name:newName};
	if(heroes.some(checkForExistingHero(newId,newName)) === true) {
        heroes.push(heroBlock);
    }
});


app.delete('/heroes/:id', function (req, res) {
	res.send("user deleted");
    var newId = req.params.id;
	if(heroes.some(checkForHeroById(newId)) === true) {
        delete heroes[selectedUser];
    }
});

app.delete('/heroes/:id', function (req, res) {
    res.send();


});

function checkForHeroById(newId){
	return newId = heroes.id
}


function checkForExistingHero(newId,newName) {
    return newId != heroes.id && newName != heroes.name;
}





