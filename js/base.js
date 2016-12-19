$(function(){
	$('header a').on('click',function(){
		$('header a').css('background','none');
		$(this).css('background','rgba(255,0,0,.5)');
	})
})