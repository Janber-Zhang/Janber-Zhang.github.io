$(document).ready(function(){
	// 个人信息
	$("#personal_Inf_img").mouseover(function(){
		$("#personal_Inf_a").slideDown();
	});
	$("#personal_Inf_img").mouseout(function(){
		$("#personal_Inf_a").slideUp();
	});

	//更多信息
	$(".more_Inf_c").mouseenter(function(){
		$(this).find('img').css({"width":"50%","transform":"rotate(360deg)"});
		$(this).find('.repo_more').slideDown();
	});
	$(".more_Inf_c").mouseleave(function(){
		$(this).find('img').css({"width":"30%","transform":"rotate(0deg)"});
		$(this).find('.repo_more').slideUp();
	}); 
})