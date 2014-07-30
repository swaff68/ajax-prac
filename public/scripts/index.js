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
})