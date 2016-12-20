// JavaScript Document
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];	
	}else{
		return getComputedStyle(obj,false)[name];	
	}
}
function move(obj,json,complete){
	clearInterval(obj.timer);
	complete = complete || {};
	complete.time = complete.time || 3000;
	complete.easeing = complete.easeing || 'linear';
	
	var dis = {};
	var start = {};
	for(var name in json){
		

		start[name] = parseFloat(getStyle(obj,name));
		dis[name] = json[name] - start[name];	
	}
	var count = parseInt(complete.time/30);
	var n = 0;
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
// 			var cur = start[name] + n * dis[name] /count;
			
			switch(complete.easeing){
				case 'linear'://匀速运动
					var a = n/count;
					var cur = start[name] + dis[name]*a;
					break;
				case 'ease-in'://加速运动
					var a = n/count;
					var cur = start[name] + dis[name]*a*a*a;
					break;
				case 'ease-out'://减速运动
					var a =1- n/count;
					var cur = start[name] + dis[name]*(1-a*a*a)
					break;
			}
			if(name == 'opacity'){
				obj.style.opacity = cur;
				obj.style.filter = 'alpha(opacity:'+cur*100+')';	
			}else{
				obj.style[name]	 = cur + 'px';	
			}
		}	
		if(n == count){
			clearInterval(obj.timer);
			complete.fn && complete.fn();	
		}
		
	},30);
}