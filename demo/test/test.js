$(document).ready(function(){
	$('#shift').unbind().click(function(){
		console.log($('#eventNone').css('left'))
		if ($('#eventNone').css('left') !== '0px') {
			$('#eventNone').css('left','0')
			return
		}
		$('#eventNone').css('left','-69px')
	});
	$('#source').keyup(function(event) {
		var val = $(this).val();
		var result = transl(val);
		$('#result').text(result);
	});
	$('#debounce_').keyup(function() {
		console.log('onkeyup');
	})
	$('#debounce_').keydown(function() {
		console.log('onkeydown');
	})
});