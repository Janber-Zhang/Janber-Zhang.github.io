$(document).ready(function(){
	$("#personal").mouseenter(function(){
		$("#personal_id").css("background-color","#095fb3");
		$("#personal_list").show();
	});
	$("#personal").mouseleave(function(){
		$("#personal_id").css("background-color","#086ed5");
		$("#personal_list").hide();
	});



//method 0

	// $("#personal_list_1").mouseleave(function(){
	// 	$("#personal_list_1").css("background-color","#095fb3");
	// });
	// $("#personal_list_1").mouseenter(function(){
	// 	$("#personal_list_1").css("background-color","#086ed5");
	// });
	// $("#personal_list_2").mouseleave(function(){
	// 	$("#personal_list_2").css("background-color","#095fb3");
	// });
	// $("#personal_list_2").mouseenter(function(){
	// 	$("#personal_list_2").css("background-color","#086ed5");
	// });
	// $("#personal_list_3").mouseleave(function(){
	// 	$("#personal_list_3").css("background-color","#095fb3");
	// });
	// $("#personal_list_3").mouseenter(function(){
	// 	$("#personal_list_3").css("background-color","#086ed5");
	// });
	// $("#personal_list_4").mouseleave(function(){
	// 	$("#personal_list_4").css("background-color","#095fb3");
	// });
	// $("#personal_list_4").mouseenter(function(){
	// 	$("#personal_list_4").css("background-color","#086ed5");
	// });



// why wrong ?

	// $(".personal_list_c").each(function(){
	// 	this.mouseenter=function(){
	// 		// var id=this.id;
	// 		$(this).css("background-color","#086ed5");
	// 	};
	// 	this.mouseleave=function(){
	// 		// var id=this.id;
	// 		$(id).css("background-color","#095fb3");
	// 	};
	// });


//  method 1

	// $(".personal_list_c")
	// 	.on("mouseenter", function(){
	// 		$(this).css("background-color","#086ed5");
	// 	})
	// 	.on("mouseleave", function(){
	// 		$(this).css("background-color","#095fb3");
	// 	})



//method 2

  	$(".personal_list_c").mouseenter(function(){
  		$(this).css("background-color","#086ed5");
  	})
  	$(".personal_list_c").mouseleave(function(){
  		$(this).css("background-color","#095fb3");
  	})
});
