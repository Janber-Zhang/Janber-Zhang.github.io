$(document).ready(function(){
	// Personal Information
	$("#personal_Inf_img").mouseover(function(){
		$("#personal_Inf_a").slideDown();
	});
	$("#personal_Inf_img").mouseout(function(){
		$("#personal_Inf_a").slideUp();
	});



	// repo list1
	//method 1
	$(".repo_list_img").mouseover(function(){
		$(this).css({"width":"50%","transform":"rotate(360deg)"});
		$(this).next().children().slideDown();
	});
	$(".repo_list_img").mouseout(function(){
		$(this).css({"width":"30%","transform":"rotate(0deg)"});
		$(this).next().children().slideUp();
	});

	//method 2
	// $("#repo_list_img1").mouseover(function(){
	// 	$("#repo_list_img1").css({"width":"50%","transform":"rotate(360deg)"});
	// 	$("#repo_list1").slideDown();
	// });
	// $("#repo_list_img1").mouseout(function(){
	// 	$("#repo_list_img1").css({"width":"30%","transform":"rotate(0deg)"});
	// 	$("#repo_list1").slideUp();
	// });
	// //repo list2
	// $("#repo_list_img2").mouseover(function(){
	// 	$("#repo_list_img2").css({"width":"50%","transform":"rotate(360deg)"});
	// 	$("#repo_list2").slideDown();
	// });
	// $("#repo_list_img2").mouseout(function(){
	// 	$("#repo_list_img2").css({"width":"30%","transform":"rotate(0deg)"});
	// 	$("#repo_list2").slideUp();
	// });
	// //repo list3
	// $("#repo_list_img3").mouseover(function(){
	// 	$("#repo_list_img3").css({"width":"50%","transform":"rotate(360deg)"});
	// 	$("#repo_list3").slideDown();
	// });
	// $("#repo_list_img3").mouseout(function(){
	// 	$("#repo_list_img3").css({"width":"30%","transform":"rotate(0deg)"});
	// 	$("#repo_list3").slideUp();
	// });
	// //repo list4
	// $("#repo_list_img4").mouseover(function(){
	// 	$("#repo_list_img4").css({"width":"50%","transform":"rotate(360deg)"});
	// 	$("#repo_list4").slideDown();
	// });
	// $("#repo_list_img4").mouseout(function(){
	// 	$("#repo_list_img4").css({"width":"30%","transform":"rotate(0deg)"});
	// 	$("#repo_list4").slideUp();
	// });
});