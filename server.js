const express = require('express');
const cors = require('cors');
const app = express();
const uuid = require('uuid-v4');
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

var port = process.env.PORT || 8080;
var astronauts = [];
var id = 0;

app.get('/simpleGet', (req,res) => {

	res.json(astronauts);
	
});

app.post('/addAstronaut', (req,res) => {
	id++;

	//Console.log(e);

	astronauts.push({"id": id,"firstName": req.body.firstName, lastName: req.body.lastName, isInSpace: req.body.isInSpace});
	res.sendStatus('SUCCESS');
});

app.get('/findAstronaut/:id', (req,res) => {
	var id = req.params.id;

	var first = req.body.firstName;
	var last = req.body.lastName;
	var inSpace = req.body.isInSpace;

	res.json(astronauts[astronauts.findIndex(item => {return item.id == id})]);
});

app.put('/put/:id', (req,res) => {

	i = astronauts.findIndex(item => {return item.id == id});

	var first = req.body.firstName;
	var last = req.body.lastName;
	var inSpace = req.body.isInSpace;

	atronauts[i] = {"id": i,"firstName": req.body.firstName, lastName: req.body.lastName, isInSpace: req.body.isInSpace};
});


app.listen(port);
console.log("Listen to port "+port);