var heroes = require('../js/heroes');
var express = require('express');
var router = express.Router();


//apparently my code doesnt run with this app.get
router.get('/', function (req, res) {
	res.send(heroes);

});

//gets hero by id
router.get('/heroes/:id', function (req, res) {
	res.send(heroes[(req.params.id - 1)]);

});

//changes hero name and returns him.
router.put('/heroes/:id/:name', function (req, res) {
	heroes[req.params.id].name = req.params.name;
	var changedHero = heroes[req.params.id].name;
	res.send(changedHero);
});

//add new hero to json array
router.post('/heroes/:id/:name', function (req, res) {
	res.send('new user added');
	var newId = req.params.id;
	var newName = req.params.name;
	var heroBlock = {id: newId, name: newName};
	if (heroes.some(checkIfExHeroByIdandName(newId, newName)) === true) {
		heroes.push(heroBlock);
	}
});

//delete by id in url.
router.delete('/heroes/:id', function (req, res) {
	heroes.splice((req.params.id - 1), 1);
	res.send('user deleted');
	var newId = req.params.id;
	if (heroes.some(checkForHeroById(newId)) === true) {
		heroes.splice((newId-1),1);
	}

});


function checkForExistingHeroByQuery() {
	return heroes.name === req.query['name'];
}

//filters heros
function findHero(query) {
	return heroes.filter(function (el) {
		return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
	});
}

//check with .some function
function checkForHeroById(newId) {
	return newId === heroes.id;
}

//check with .some function
function checkIfExHeroByIdandName(newId, newName) {
	return newId != heroes.id && newName != heroes.name;
}

module.exports = router;





