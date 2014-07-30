// 5. Create your data model that mongoose wil push to mongo

var mongoose = require('mongoose')

var SubmittedNumber = mongoose.model('SubmittedNumber', {
	
	submittedNumber: Number

});



module.exports = SubmittedNumber