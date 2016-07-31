$(document).ready(function(){
	// 搜索函数
	function searchBook(){
		var keywords= $('#keyword_search').val(); 
		// alert('是否查询：'+keywords);
		$.ajax({
	             type: "get",
	             async: true,
	             url: 'https://api.douban.com/v2/book/search?q='+ keywords +'&fields=all',
	             dataType: "jsonp",
	             jsonp: "callback",
	             jsonpCallback:"aha",
	             success: function(json){
	             	$('.cell:first').show();
	             	$('.cell:gt(0)').remove();
	             	// alert('查询成功！！！相关书籍有:' + json.total + '本');
	                $('#bookTotal').text('相关书籍有:' + json.total + '本');
	                // 显示书本信息
	                for (var i = 0 ; i <= json.count-1; i++) {
	                	$('.cell:first').clone().appendTo('.wrap');
	                	$('.cell:last').find('img').attr({
	                	src: json.books[i].image,
	                	alt: json.books[i].title
		                });
		                $('.cell:last').find('.bookTitle').html(json.books[i].title);
		                $('.cell:last').find('.bookAuthor').html('作者：' + json.books[i].author +' / ' +json.books[i].publisher+ ' / ' + json.books[i].pubdate );
		                if (json.books[i].summary) {
		                	$('.cell:last').find('.bookSummary').html(json.books[i].summary);
		                }else{
		                	$('.cell:last').find('.bookSummary').html('暂无简介');
		                }
		                $('.cell:last').find('a').attr({
		                	target: 'block',
		                	href: json.books[i].url
		                });
		                var jdt_width = json.books[i].rating.average * 10;
		                $('.cell:last').find('#jdt').css('width', jdt_width+'%');
		                $('.cell:last').find('.raterNum').html('(' + json.books[i].rating.numRaters + '人评价）')
	                }
	                $('.cell:first').hide();
	             },
	             error: function(){
	                alert('查询失败');
	             }
	    });
	};
	// 默认获得焦点
	$('#keyword_search').focus();
	$('#toSearch').click(searchBook);
	// 绑定键盘事件
	$('#keyword_search').keypress(function(event) {
		if (event.keyCode == "13"){
			searchBook();
		}
	});
	// $('#toSearch').click(function() {
	// 	var keywords= $('#keyword_search').val(); 
	// 	alert('是否查询：'+keywords);
	// 	$.ajax({
	//              type: "get",
	//              async: true,
	//              url: 'https://api.douban.com/v2/book/search?q='+ keywords +'&fields=id,title,image,summary,author',
	//              dataType: "jsonp",
	//              jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
	//              jsonpCallback:"aha",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
	//              success: function(json){
	//              	$('.cell:first').show();
	//              	$('.cell:gt(0)').remove();
	//              	alert('查询成功！！！相关书籍有:' + json.total + '本');
	//                 $('#bookTotal').text('相关书籍有:' + json.total + '本');
	//                 // 显示书本信息
	//                 for (var i = 0 ; i <= 19; i++) {
	//                 	$('.cell:first').clone().appendTo('.wrap');
	//                 	$('.cell:last').find('img').attr({
	//                 	src: json.books[i].image,
	//                 	alt: json.books[i].title
	// 	                });
	// 	                $('.cell:last').find('.bookTitle').html(json.books[i].title);
	// 	                $('.cell:last').find('.bookAuthor').html('作者：'+json.books[i].author);
	// 	                $('.cell:last').find('.bookSummary').html(json.books[i].summary);
	//                 }
	//                 $('.cell:first').hide();
	//              },
	//              error: function(){
	//                 alert('查询失败');
	//              }
	//     });
	// });

});

