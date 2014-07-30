var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

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

var server = app.listen(7656, function() {
	console.log('Express server listening on port ' + server.address().port);
});
