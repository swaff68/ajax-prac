var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var totalNum = 0;
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/numberscount');
var SubmittedNumber = require('./Models/usernumbers.js')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);





// whatever we res.send goes to $.get, in this case to "index.js" in the public/scripts/folder
app.get('/numbers', function(req, res){
	res.send([
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random(),
		Math.random()
		])
})

// 3.Take the global var of totalNum and add the value of req.query.startNum to it, the startNum is a key that came from index.js, startNum has the value of subNum.  

// 	Now add totalNum and req.query.startNum and that is the "new" totalNum. 
// 	Now create a new key/value pair totalCurrentNum:totalNum AND send it to index.js

app.post('/numResponse', function(req, res){
	console.log(req.query.startNum)
	totalNum = totalNum + +req.body.startNum
	res.send({totalCurrentNum:totalNum})
	
// 6. craete the mothod to push the user submitted data to mongo
	var submittedNumber = new SubmittedNumber({
	submittedNumber: req.body.startNum
	});
	
	submittedNumber.save();
})


// app.post('/formsubmit', function(req, res){
	

// 	subNum.save();
// 	console.log(subNum)
// });

var server = app.listen(7656, function() {
	console.log('Express server listening on port ' + server.address().port);
});
