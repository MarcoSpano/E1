const express = require('express');
const cors = require('cors');
const app = express();
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

var port = process.env.PORT || 8080;
var assignments = [];

app.get('/getAssignment', (req,res) => {

	res.json(assignments);
	
});

app.post('/addAssignment', (req,res) => {

	taskid = req.body.taskID;
	assignemntid = req.body.assignmentID;
	workerid = req.body.workerID;
	assignmentres = req.body.assignemntResult;

	assignments.push({"taskID": taskid,"assignmentID": assignemntid, "workerID": workerid, "assignemntResult": assignmentres});
	//res.sendStatus('SUCCESS');
	res.json({"taskID": taskid,"assignmentID": assignemntid, "workerID": workerid, "assignemntResult": assignmentres});
});

/*app.get('/findAstronaut/:id', (req,res) => {
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

*/
app.listen(port);
console.log("Listen to port "+port);