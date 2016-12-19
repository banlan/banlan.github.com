$(function(){
	// $('#box a').on('mouseover',function(){
	// 	$('#box a').removeClass('active');
	// 	$(this).addClass('active');
	// })
	
	//穿墙
	// var oA = document.getElementsByTagName('a');
	$('.works a').each(function(){
		$(this).on('mouseenter',function(ev){
			var dir = hoverDir(ev,this);
			switch(dir){
				case 'l':
				 console.log($(this).children('span'))
					$(this).children('span').css('left','-310px');
					$(this).children('span').css('top','0px');
					$(this).children('span').animate({left:0,top:0}, 500);
				break;
				case 't':
					$(this).children('span').css('top','-230px');
					$(this).children('span').css('left','0px');
					$(this).children('span').animate({left:0,top:0}, 500);
				break;
				case 'r':
					$(this).children('span').css('left','310px');
					$(this).children('span').css('top','0px');
					$(this).children('span').animate({left:0,top:0}, 500);
				break;
				case 'b':
					$(this).children('span').css('top','230px');
					$(this).children('span').css('left','0px');
					$(this).children('span').animate({left:0,top:0}, 500);
				break;
			}
		});
		$(this).on('mouseleave',function(ev){
			var dir = hoverDir(ev,this);
			switch(dir){
				case 'l':
					$(this).children('span').animate({left:'-310px',top:'0px'},500);
				break;
				case 't':
					$(this).children('span').animate({left:'0',top:'-230px'},500);
				break;
				case 'r':
					$(this).children('span').animate({left:'310px',top:'0'},500);
				break;
				case 'b':
					$(this).children('span').animate({left:'0',top:'230px'},500);
				break;
			};
		})
	})
});
//穿墙的函数
function hoverDir(ev,obj){
	var enterX = ev.clientX;
	var enterY = ev.clientY;
	var l = ev.clientX - obj.offsetLeft;
	var t = ev.clientY - obj.offsetTop;
	var r = obj.offsetLeft+obj.offsetWidth - ev.clientX;
	var b = obj.offsetTop+obj.offsetHeight - ev.clientY;
	switch(Math.min(l,t,r,b)){
		case l:
		return 'l';
		break;
		case t:
		return 't';
		break;
		case r:
		return 'r';
		break;
		case b:
		return 'b';
		break;
	}
}