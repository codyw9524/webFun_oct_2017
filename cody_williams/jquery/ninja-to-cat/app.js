// the shorthand for doc.ready
$(function(){
	$('img').click(function() {
		// got the new attr
		// use .attr() as a getter
		var altSrc = $(this).attr('data-alt-src');
		// swap src and data-alt src

		// use .attr() as a getter
		var temp = $(this).attr('src');

		// use .attr() as a setter
		$(this).attr('src', altSrc);
		$(this).attr('data-alt-src', temp);
	})
});
