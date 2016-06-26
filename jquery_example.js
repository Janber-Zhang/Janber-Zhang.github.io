$(document).ready(function(){
	// 切换登录/注册
	$("#signup").click(function(){
		$("#login").show();
		$("#register").hide();
	});
	$("#signin").click(function(){
		$("#register").show();
		$("#login").hide();
	});
	$("#signin").click(function(){
		$("#index_tab_sidebar").animate({left:'268px'},150);
	});
	$("#signup").click(function(){
		$("#index_tab_sidebar").animate({left:'188px'},150);
	});

	// 下载App二维码
	$("#AppDownload").mouseenter(function(){
		$("#Appdownload_a").slideDown(300);
	});
	$("#AppDownload").mouseleave(function(){
		$("#Appdownload_a").slideUp(300);
	});
});