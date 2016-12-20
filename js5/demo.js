window.onload =function(){
	show('login','login_info','close');	
	show('zhuce','zhuce_info','close');
	show('phone','phone_info','close');
	show('my_tuan','tuan_info','close');
	show('liulan','liulan_info','close');
	show('shopcar','shopcar_info','close');
	show('kefu','kefu_info','close');
	show('shopmen','shopmen_info','close');
	show('more','more_info','close');
	star('box');
    star('box1');
    star('box2');
    star('box3');
    star('box4');
    star('box5');
    star('box6');
    star('box7');
	var oQiehuan = document.getElementById('qiehuan');
	var oAction = document.getElementById('action');
		oQiehuan.onclick = function(){
			oAction.style.display = 'block';
			oAction.onmouseout = function(){
				oAction.style.display = 'none';	
			}	
		}	 
	
	var oList2 = document.getElementById('list_2');
	var oShow = document.getElementById('show');
	var oMore = document.getElementById('more_list');
	oMore.onmouseover = function(){
		oShow.style.display = 'block';	
		oList2.style.borderBottom = 'none';
		
	}
	oList2.onmouseout = function(){
			oShow.style.display='none';	
		}
	
	//轮播图
	var oTabshow = document.getElementById('tab-show');
	var timer = null;
	var count = 0;
	clearInterval(timer);
	timer = setInterval(function(){
		
		move(oTabshow,{left:-689*count},{easeing:'linear',time:2000});	
		count++;
		if(count == 2){
			count = 0;	
		}
	},5000);
	
}

 function show(id,id2,id3){
		var oLogin = document.getElementById(id);
		var oLogin_info = document.getElementById(id2);
		var oClose = oLogin_info.children[0];
		
		oLogin.onclick = function(){
				oLogin_info.style.display='block';
				
		}
		oClose.onclick = function(){
			oLogin_info.style.display='none';	
		}
		
		//倒计时
		var oUl = document.getElementById('ul');
		var aLi = oUl.getElementsByTagName('li');
		var oDate = new Date();
		oDate.setHours(23,0,0,0);
		function count (){
			
			var iNow = new Date();
			var ms = oDate.getTime() - iNow.getTime();
			var s = parseInt(ms / 1000);
			var h = parseInt(s / 3600);
				s = s%3600;	
			var m = parseInt(s/60);
			 s = s%60;
			var str = toDou(h)+':'+toDou(m)+':'+toDou(s)+':';
			for(var i = 0; i < aLi.length;i++){
				if(str[i] == ':')continue;
				aLi[i].innerHTML = str.charAt(i);
			}
		}
		count();
		setInterval(count,1000);
		
		//限时抢购
		var oSul = document.getElementById('star_ul');
		var oLi = oSul.getElementsByTagName('li');
		var iNow = 0;
		
		//oSul.style.width = 1170 * oLi.length+'px';
		oSul.style.width = oLi[0].offsetWidth*oLi.length+'px';
		//var w = oSul.offsetWidth/2;
		var timer1 = null;
		clearInterval(timer1);
		timer1 = setInterval(function(){
			
			move(oSul,{left:-1170*iNow},{time:1000});
			iNow++;	
			if(iNow == oLi.length){
				iNow =0;	
			}
			//iNow+=10;
			//oSul.style.left = (iNow%w - w)%w+'px';
		},5000);
		
		//星星评分



 }
function star(id){
var oBox = document.getElementById(id);
var aSp = oBox.getElementsByTagName('span');
for(var i = 0; i < aSp.length; i++){
    if(i%2 == 0){
        aSp[i].className = 'left';
    }else{
        aSp[i].className = 'right';
    }
}
for(var i =0; i < aSp.length; i++){
    aSp[i].index = i;
    aSp[i].onmouseover = function(){
        for(var i=0; i < aSp.length;i++){
            if(i%2 == 0){
                if(i <= this.index){
                    aSp[i].className = 'left_on';
                }else{
                    aSp[i].className = 'left';
                }
            }else{
                if(i <= this.index){
                    aSp[i].className = 'right_on';
                }else{
                    aSp[i].className = 'right';
                }
            }
        }
    }
    aSp[i].onmouseout = function(){
        for(var i =0; i<aSp.length;i++){
            if(i%2 == 0){
                aSp[i].className = 'left';
            }else{
                aSp[i].className = 'right';
            }
        }
    }
}
}
function toDou(n){
	if(n < 10){
		return '0' + n;	
	}else{
		return '' + n ;	
	}
}













