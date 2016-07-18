$(document).ready(function(){
	// 个人信息
	$("#personal_Inf_img").mouseover(function(){
		$("#personal_Inf_a").slideDown();
	});
	$("#personal_Inf_img").mouseout(function(){
		$("#personal_Inf_a").slideUp();
	});

	//更多信息
	$(".repo_list_img").mouseenter(function(){
		$(this).css({"width":"50%","transform":"rotate(360deg)"});
		$(this).next().slideDown();
	});
	$(".more_Inf_c").mouseleave(function(){
		$(this).find('img').css({"width":"30%","transform":"rotate(0deg)"});
		$(this).find('.repo_more').slideUp();
	}); 
})