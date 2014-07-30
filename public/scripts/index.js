$(function(){
	// the #random came from the index.jade file
	$('#random').on('click', function(e){
		e.preventDefault();
			// the #numbers comes from the index.jade page
		$.get('/numbers', function(numbers){
			$('#numbers').append(numbers.map(function(n){
				return $('<li>').text(n);
			}))
		})
	})
// 1. "when" i click the submit button
	$('#numForm').on('submit', function(e){
		e.preventDefault();
		// 2. "what" Take the value in the field and that value is now the variable "subNum"  
		var subNum = $('[name=submittedNumber]').val()
		console.log(subNum)
		
		// and "send" it to the server using the /numResponse channel; now create a key/value pair and call the key startNum which has the value of subNum.

		$.post('/numResponse', {startNum:subNum}, function(returnNum){
			
		// 4. Create a function called "returnNum" above,that takes the value of totalCurrentNum coming from app.js and displays the value to the h3 in the index.jade file so that the user can see it
			$('#totalCount').text(returnNum.totalCurrentNum)
		})
	})
})

