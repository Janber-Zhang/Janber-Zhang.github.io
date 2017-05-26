$(document).ready(function(){
	$('#shift').unbind().click(function(){
		console.log($('#eventNone').css('left'))
		if ($('#eventNone').css('left') !== '0px') {
			$('#eventNone').css('left','0')
			return
		}
		$('#eventNone').css('left','-69px')
	});
});