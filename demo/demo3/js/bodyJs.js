$(document).ready(function(){
	// 搜索函数
	function searchBook(){
		var keywords= $('#keyword_search').val(); 
		// alert('是否查询：'+keywords);
		$.ajax({
	             type: "get",
	             async: true,
	             url: 'https://api.douban.com/v2/book/search?q='+ keywords +'&fields=all&count=25',
	             dataType: "jsonp",
	             jsonp: "callback",
	             jsonpCallback:"aha",
	             success: function(json){
	             	$('.cell:first').show();
	             	$('.cell:gt(0)').remove();
	             	// alert('查询成功！！！相关书籍有:' + json.total + '本');
	                $('#bookTotal').text('相关书籍有:' + json.total + '本');
	                // 按评论数排序
	           			var bookSort = new Array();
	           			var bookBox = json.books;
	             		for (var i = 0; i < json.count; i++) {
	             			for (var j = 0; j < json.count - i -1; j++) {
	             				if (bookBox[j].rating.numRaters < bookBox[j + 1].rating.numRaters) {
	             					var temp = bookBox[j];
	             					bookBox[j] = bookBox[j + 1];
	             					bookBox[j+1] = temp;
	             				}
	             			}
	             		}
	             		bookSort = bookBox;             		
	                // 显示书本信息
	                for (var i = 0 ; i <= json.count-1; i++) {
	                	$('.cell:first').clone().appendTo('.bookCell');
	                	// 获得书籍封面
	                	$('.cell:last').find('img').attr({
	                	src: bookSort[i].image,
	                	alt: bookSort[i].title
		                });
		                // 获得书籍详细信息
		                $('.cell:last').find('.bookTitle').html(bookSort[i].title);
		                $('.cell:last').find('.bookAuthor').html('作者：' + bookSort[i].author +' / ' +bookSort[i].publisher+ ' / ' + bookSort[i].pubdate );
		                if (bookSort[i].summary) {
		                	$('.cell:last').find('.bookSummary').html(bookSort[i].summary);
		                }else{
		                	$('.cell:last').find('.bookSummary').html('暂无简介');
		                }
		                $('.cell:last').find('a').attr({
		                	target: 'block',
		                	href: bookSort[i].url
		                });
		                var jdt_width = bookSort[i].rating.average * 10;
		                $('.cell:last').find('#jdt').css('width', jdt_width+'%');
		                $('.cell:last').find('.raterNum').html('(' + bookSort[i].rating.numRaters + '人评价）')
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
	

});