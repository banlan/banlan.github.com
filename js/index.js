function rnd(n,m){
	return parseInt(Math.random()*(m-n)+n);
}
$(function(){
	$(document).mousemove(function(ev){
		if(ev.clientY<300){
			$('.header').fadeIn('400',function(){
				$('.header').css('display','block');

			});
			
		}else{
			$('.header').fadeOut('400',function(){
				$('.header').css('display','none');
			});
		}
	})
	// $('#box a').mouseover(function(){
	// 	// $('#box span').removeClass('animated shake');
	// 	$('#box span').css('left',$(this).index()*100+'px');
		
	// 	// $('#box span').addClass('animated shake');
	// })
	var a = $('#box').find('a');
	
	for(var i=0;i<a.length;i++){
		 a[i].index = i;
		a[i].onmouseover = function(){
			$('#box span').css('left',$(this).index()*100+'px');
			 $('#box span').addClass('animated shake');
			 $('#box span').css('transition','none')
			 

		}
		a[i].onmouseout = function(){
			 $('#box span').removeClass('animated shake');
			// $('#box span').css('transition','1s all linear')
		}
	}
	$('#box').mouseout(function(){
		$('#box span').css('transition','1s all linear')
		 $('#box span').css('left','0');
	})
//诗句
var oArt = document.getElementById('art');
var str = '岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。'
 for (var i = 0; i < str.length; i++) {
 	var oSpan = document.createElement('span');
 	 oSpan.innerHTML = str.charAt(i);
 	oArt.appendChild(oSpan);

 }
	$('span').each(function(i){
		if(i<12){
			$(this).fadeIn(1000*i);
		}else if(i>13 && i<24){
			$(this).fadeIn(400*i);
		}else{
			$(this).fadeIn(300*i);
		}
	})
	//var iNow = 0;
	var iNow = rnd(0,4);
	var oA = new Audio();
	// oA.src="mp3/行云流水.mp3";
	oA.src='mp3/'+$('p').eq(iNow).html()+'.mp3';
	oA.play();
	oA.onended=function(){
		var num = rnd(0,4);
		iNow = num;
		oA.src='mp3/'+$('p').eq(iNow).html()+'.mp3';
		oA.play();
	};
	
})