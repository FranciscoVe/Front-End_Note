jQuery(document).ready(function(e) {
	$(document).scroll(function(){
		var static_top_height = 260;
		var height = $(document).scrollTop();
		if (height > static_top_height) {
			 $("#share-box").addClass("move_top");
		}
		if (height < static_top_height) {
			 $("#share-box").removeClass("move_top");
		}
	});
});
jQuery(function(){
	if (!!$('.sticky').offset()) {
		var stickyTop = $('.sticky').offset().top;
		$(window).scroll(function(){
			var windowTop = $(window).scrollTop();
			if (stickyTop < windowTop){
				$('.sticky').addClass('sticky_top');
			}
			else {
				 $('.sticky').removeClass("sticky_top");
			}
		});
	}
});


