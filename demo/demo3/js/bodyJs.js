$(document).ready(function(){
	$('#toSearch').click(function() {
		var keywords= $('#keyword_search').val();
		alert('是否查询：'+keywords);
		$.ajax({
	             type: "get",
	             async: true,
	             url: 'https://api.douban.com/v2/book/search?q='+ keywords +'&fields=id,title,image,summary',
	             dataType: "jsonp",
	             jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
	             jsonpCallback:"aha",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
	             success: function(json){
	             	alert('相关书籍有:' + json.total + '本');
	                $('#bookTotal').text('相关书籍有:' + json.total + '本');
	                // 显示书本信息
	                $('.cell').find('img').attr({
	                	src: json.books[0].image,
	                	alt: json.books[0].title
	                });
	                $('.cell').find('h2').html(json.books[0].title)
	                $('.cell').find('p').html(json.books[0].summary)
	             },
	             error: function(){
	                alert('查询失败');
	             }
	         });
	});

});

