$(document).ready(function(){
	// Personal Information
	$("#personal_Inf_img").mouseenter(function(){
		$("#personal_Inf_a").fadeIn();
	});
	$("#personal_Inf_img").mouseleave(function(){
		$("#personal_Inf_a").fadeOut();
	});
	// repo list
	$("#repo_list_img").mouseenter(function(){
		$("#repo_list").fadeIn();
	});
	$("#repo_list_img").mouseleave(function(){
		$("#repo_list").fadeOut();
	});
});