function alert(string){
	if(!string){
		return false;
	} else {
		sweetAlert('噢不！', string, "error");
	}
}

$(document).ready(function(){

	// var n = $('#MainSide > div').size();
	// $('#boxProfile .sideTitle').append(' ('+n+')');

	// re-Text button
	$('input[name=func]').eq(0).val('確定留言');
	$('input[name=func]').eq(1).val('清除重寫');

	// 如果噗浪沒有人回應就藏起來
	setTimeout(function() {
		var plurk_hide = $('#responds .post_title .articleBody').size();
		// console.log('check plurk');
		if(plurk_hide) {
			// console.log('沒有噗浪回應;應該藏起來');
			$('#responds').slideUp('slow');
		}
	}, 3000);

	// 自動調整留言板確定按鈕的位置(如果勾取不顯示大頭貼)
	function commentsBtnPosition(){
		var noFace = $('#dislikefoto').prop("checked"),
			_first_btn = $('input[name=func][type=submit]');
		if(noFace) {
			_first_btn.addClass('noFace');
		} else {
			_first_btn.removeClass('noFace');
		}
	}
	$('#dislikefoto').bind('click', function(){
		commentsBtnPosition();
	});

	// 2014.12.05 SweetAlert 教學文使用 文章編號 82429990
	$('.js-sweetAlert').bind('click', function(){
		sweetAlert("Oops!", "你犯了個錯", "error");
	});
	$('.js-sweetAlertSuccess').bind('click', function(){
		sweetAlert("Congrats", "你做到了！", "success");
	});

	// Blog Sidebar 右上角 Search 功能沒有防呆驗證，自己加！
	var blogSearchForm = $('#plugin_search_this').parent('form');
	blogSearchForm.attr('id','blogSearchForm');

	function validate(){
		var v = $('#plugin_search_text').val();
		// console.log('keywords: '+v);
		if( v == '' || v == '請輸入關鍵字' ){
			swal({
				title: "糟糕！",
				text: "你似乎忘了輸入關鍵字呢",
				type: 'error',
				timer: 2000,
				confirmButtonText: "我知道了"
			});
			return false;
		} else {
			return true;
		}
	}

	$('.btn.searchbtn')
		// remove yam blog default onclick events
		.attr('onclick','')

		// Re-define my event
		.live('click', function(e){

			e.preventDefault(); // stop default behavior

			var id = $(this).attr('id'); // detect which button is clicked.
			var flag = validate(); // check keywords
			var k = $('#plugin_search_text').val();

			// console.log('re-bind search event');
			// console.log('keywords: '+ k );
			// console.log('id: '+id);

			if(flag){
				switch(id) {
					case 'plugin_search_text':
						$('#blogSearchForm').submit();
					break;
					case 'plugin_search_news':
						location.href = 'http://search.yam.com/Search/Web/Default.aspx?SearchType=news&l=0&p=0&k='+encodeURIComponent( k )+'&utf8=1';
					break;
					case 'plugin_search_blog':
						location.href = 'http://search.yam.com/Search/Web/DefaultKSA.aspx?SearchType=blog&l=0&p=0&k='+encodeURIComponent( k );
					break;
					default:
						$('#blogSearchForm').submit();
					break;
				}
			}

		});

});