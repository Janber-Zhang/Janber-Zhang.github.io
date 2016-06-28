$(document).ready(function(){
	// Personal Information
	$("#personal_Inf_img").mouseenter(function(){
		$("#personal_Inf_a").slideDown();
	});
	$("#personal_Inf_img").mouseleave(function(){
		$("#personal_Inf_a").slideUp();
	});
	// repo list
	$("#repo_list_img").mouseenter(function(){
		$("#repo_list").slideDown();
	});
	$("#repo_list_img").mouseleave(function(){
		$("#repo_list").slideUp();
	});
});