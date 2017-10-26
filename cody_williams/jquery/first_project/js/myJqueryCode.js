$(document).ready(function(){
	// all of our jquery code goes
	// inside the anonymous function
	$('#myButton').click(function(){
		$('#myTarget').html('a;lskdjfa;lskdfja;kfjas;lfkja;j');
	});
	$('#formButton').click(function() {
		// using .val() as a getter
		// var name = $('#name').val();
		// var email = $('#email').val();
		// console.log(name, email);

		// using .val() as a setter
		$('#name').val('CODY');
		$('#email').val('CODY@CODY.COM')
		return false;
	})
	$('.testButton').click(function(){
		$(this).hide('slow');
		// console.log(val);
	});
	$('.testButton').css()
});





