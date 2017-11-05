(function () {

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

//get specific hero by name+id
app.get('/heroes/:id/:name', function (req, res) {
	res.send(req.params)

});

//apparently my code doesnt run with this app.get
app.get('/heroes', function (req, res) {
	res.send(heroes);

});

//gets hero by id
app.get('/heroes/:id', function (req, res) {
	res.send(heroes[(req.params.id)-1]);

});

//changes hero name and returns him.
app.put('/heroes/:id/:name', function (req, res) {
	heroes[req.params.id].name = req.params.name;
	var changedHero = heroes[req.params.id].name;
	res.send(changedHero);
});

//add new hero to json array
app.post('/heroes/:id/:name', function (req, res) {
	res.send("new user added");
	var newId = req.params.id;
	var newName = req.params.name;
	var heroBlock = {id: newId, name:newName};
	if(heroes.some(checkIfExHeroByIdandName(newId,newName)) === true) {
        heroes.push(heroBlock);
    }
});

//delete by id in url.
app.delete('/heroes/:id', function (req, res) {
		heroes.splice((req.params.id - 1), 1);
	res.send("user deleted");
});

//delete by search of name
app.delete('/heroes/:name', function (req, res) {
	res.send();
	filterItems('ap');

});

function checkForExistingHeroByQuery(){
	return heroes.name === req.query['name'];
}
//filters heros
	function findHero(query) {
		return heroes.filter(function(el) {
			return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
		})
	}

//check with .some function
function checkForHeroById(newId){
	return newId === heroes.id
}

//check with .some function
function checkIfExHeroByIdandName(newId,newName) {
    return newId != heroes.id && newName != heroes.name;
}


})();



