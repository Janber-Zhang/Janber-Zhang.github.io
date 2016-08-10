$(document).ready(function(){
	// 定义容器
	var bookBox = null;
	// 搜索函数
	function searchBook(){
		var keywords= $('#keyword_search').val(); 	
		if (keywords) {	
			$('#waiting').show();	
			// alert('是否查询：'+keywords);
			$.ajax({
		             type: "get",
		             async: true,
		             url: 'https://api.douban.com/v2/book/search?q='+ keywords +'&fields=all&count=40',
		             dataType: "jsonp",
		             jsonp: "callback",
		             jsonpCallback:"aha",
		             success: function(json){
		             	$('#waiting').hide();		        
		             	bookBox = json.books; 
		             	// 
		             	if (bookBox.length) {
		             		$('#sortOrder').show();
		             		$('.cell:first').show();
		             		$('.cell:gt(0)').remove();
		             		// alert('查询成功！！！相关书籍有:' + json.total + '本');
		                	$('#bookTotal').text('相关书籍有:' + json.total + '本');   		
		                	// 显示书本信息
		               	 	displayBook(bookBox);
		                	$('.cell:first').hide();
		                	$('#paging').show();
		             	}else{
		             		alert('未查询到相关书籍！');
		             	}		             	
		             },
		             error: function(){
		                alert('查询失败');
		             }
		    });
		}else{
			alert('请输入关键字查询！！！')
		}
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
        displayBook(bookBox);
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
        displayBook(bookBox);
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
 		displayBook(bookBox);
        $('.cell:first').hide();
	});

	// 分页显示
	$('.page_').click(function() {
		var PageNum_ = $(this).text();
		// alert('显示第' + PageNum_ + '页信息！');
		var book_box_ = bookBox.slice( (PageNum_ - 1) * 10, PageNum_ * 10);
		$('.cell:first').show();
     	$('.cell:gt(0)').remove();
     	displayBook(book_box_);
        $('.cell:first').hide();
	});
	
	// 显示书籍信息
	function displayBook(book_case){
        for (var i = 0 ; i <= 9; i++) {
        	$('.cell:first').clone().appendTo('.bookCell');
        	// 获得书籍封面
        	$('.cell:last').find('img').attr({
        	src: book_case[i].image,
        	alt: book_case[i].title
            });
            // 获得书籍详细信息
            $('.cell:last').find('.bookTitle').html(book_case[i].title);
            $('.cell:last').find('.bookAuthor').html('作者：' + book_case[i].author +' / ' +book_case[i].publisher+ ' / ' + book_case[i].pubdate + ' / ' + book_case[i].price);
            if (book_case[i].summary) {
            	$('.cell:last').find('.bookSummary').html(book_case[i].summary);
            }else{
            	$('.cell:last').find('.bookSummary').html('暂无简介');
            }
            $('.cell:last').find('a').attr({
            	target: 'block',
            	href: book_case[i].url
            });
            var jdt_width = book_case[i].rating.average * 10;
            $('.cell:last').find('#jdt').css('width', jdt_width+'%');
            $('.cell:last').find('.raterNum').html('(' + book_case[i].rating.numRaters + '人评价）')
        }
	}

	

});