$(document).ready(function(){
	// 定义容器
	var bookBox;
	// 搜索函数
	function searchBook(){
		$('#waiting').show();
		var keywords= $('#keyword_search').val(); 
		// alert('是否查询：'+keywords);
		$.ajax({
	             type: "get",
	             async: true,
	             url: 'https://api.douban.com/v2/book/search?q='+ keywords +'&fields=all&count=20',
	             dataType: "jsonp",
	             jsonp: "callback",
	             jsonpCallback:"aha",
	             success: function(json){
	             	$('#waiting').hide();
	             	$('#sortOrder').show();
	             	$('.cell:first').show();
	             	$('.cell:gt(0)').remove();
	             	// alert('查询成功！！！相关书籍有:' + json.total + '本');
	                $('#bookTotal').text('相关书籍有:' + json.total + '本');
	                // 按评论数排序
           			bookBox = json.books;      		
	                // 显示书本信息
	                displayBook();
	                $('.cell:first').hide();
	             },
	             error: function(){
	                alert('查询失败');
	             }
	    });
	};
	// 默认获得焦点
	$('#keyword_search').focus();
	
	// 绑定键盘事件
	$('#keyword_search').keypress(function(event) {
		if (event.keyCode == "13"){
			searchBook();
		}
	});

	// 点击查询
	$('#toSearch').click(searchBook);

	// 按评论人数排序
	$('#Volume').click(function() {
		$('.cell:first').show();
     	$('.cell:gt(0)').remove();
     	// 排序
		for (var i = 0; i < bookBox.length; i++) {
 			for (var j = 0; j < bookBox.length - i -1; j++) {
 				if (bookBox[j].rating.numRaters < bookBox[j + 1].rating.numRaters) {
 					var temp = bookBox[j];
 					bookBox[j] = bookBox[j + 1];
 					bookBox[j+1] = temp;
 				}
 			}
 		}
 		// 显示书本信息
        displayBook();
        $('.cell:first').hide();
	});

	// 按评分排序
	$('#Score').click(function() {
		$('.cell:first').show();
     	$('.cell:gt(0)').remove();
     	// 排序
		for (var i = 0; i < bookBox.length; i++) {
 			for (var j = 0; j < bookBox.length - i -1; j++) {
 				if (bookBox[j].rating.average < bookBox[j + 1].rating.average) {
 					var temp = bookBox[j];
 					bookBox[j] = bookBox[j + 1];
 					bookBox[j+1] = temp;
 				}
 			}
 		}
 		// 显示书本信息
        displayBook();
        $('.cell:first').hide();
	});
	// 按价格排序
	$('#Price').click(function() {
		$('.cell:first').show();
     	$('.cell:gt(0)').remove();
     	// 排序
		for (var i = 0; i < bookBox.length; i++) {
 			for (var j = 0; j < bookBox.length - i -1; j++) {
 				if (bookBox[j].price < bookBox[j + 1].price) {
 					var temp = bookBox[j];
 					bookBox[j] = bookBox[j + 1];
 					bookBox[j+1] = temp;
 				}
 			}
 		}
 		displayBook();
        $('.cell:first').hide();
	});
	// 显示书籍信息
	function displayBook(){
        for (var i = 0 ; i <= bookBox.length-1; i++) {
        	$('.cell:first').clone().appendTo('.bookCell');
        	// 获得书籍封面
        	$('.cell:last').find('img').attr({
        	src: bookBox[i].image,
        	alt: bookBox[i].title
            });
            // 获得书籍详细信息
            $('.cell:last').find('.bookTitle').html(bookBox[i].title);
            $('.cell:last').find('.bookAuthor').html('作者：' + bookBox[i].author +' / ' +bookBox[i].publisher+ ' / ' + bookBox[i].pubdate + ' / ' + bookBox[i].price);
            if (bookBox[i].summary) {
            	$('.cell:last').find('.bookSummary').html(bookBox[i].summary);
            }else{
            	$('.cell:last').find('.bookSummary').html('暂无简介');
            }
            $('.cell:last').find('a').attr({
            	target: 'block',
            	href: bookBox[i].url
            });
            var jdt_width = bookBox[i].rating.average * 10;
            $('.cell:last').find('#jdt').css('width', jdt_width+'%');
            $('.cell:last').find('.raterNum').html('(' + bookBox[i].rating.numRaters + '人评价）')
        }
	}

});