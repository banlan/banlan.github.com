$(function(){
	$('#box a').on('mouseover',function(){
		$('#box a').removeClass('active');
		$(this).addClass('active');
	});
	var aLi = $('li');

	//console.log(aLi)
	//转化布局
	var pos = [];
	$('li').each(function(i){
		pos[i] = {
			l:$(this).offset().left,
			t:$(this).offset().top
		}
		// $(this).index=i;
		$(this).attr('index',i);

	})
	 //console.log(pos)
	 // 转成定位布局
	 $('li').each(function(i) {
	 	$(this).css('margin','0px');
	 	$(this).css('position','absolute');
	 	$(this).css('left',pos[i].l+'px');
	 	$(this).css('top',pos[i].t+'px');
	 });


	 //添加拖拽
	 var z = 1;
	 $('li').each(function(i){
	 	$(this).on('mousedown',function(ev){
	 		$('li').css('transition','none');
	 		var oNear = null;
	 		var _this = this;
	 		
	 		$(_this).css('z-index',++z);
	 		var disX = ev.clientX - $(this).offset().left;
	 		var disY = ev.clientY - $(this).offset().top;
	 		// console.log(disX+'|'+disY)
	 		function Move(ev){

	 			$(_this).css({
	 				left:(ev.clientX - disX)+'px',
	 				top:(ev.clientY - disY)+'px'
	 			});
	 			//console.log($(_this))
	 			$('li').removeClass('active');
	 			//console.log(_this)
	 			 oNear = getNear(_this);
	 			//console.log(oNear)
	 			 if(oNear !== _this&&oNear){
	 			 	$(oNear).addClass('active');
	 			 }

	 		};
	 		function Up(ev){
	 			var tmp = $(oNear).attr('index')
	 			$(oNear).attr('index',$(_this).attr('index'))  ;
	 			
	 			$(_this).attr('index',tmp) ;
	 		
				$('li').each(function(i){
					$(this).css('left',pos[$('li').eq(i).attr('index')].l+'px')
					$(this).css('top',pos[$('li').eq(i).attr('index')].t+'px')
					$('li').removeClass('active');
					$('li').css('transition','1s left ease,1s top ease');
				})


	 			$(document).off('mousemove',Move);
	 			$(document).off('mouseup',Up);
	 			$(this)[0].releaseCapture&&$(this)[0].releaseCapture();
	 		};
	 		$(document).on('mousemove',Move);
	 		$(document).on('mouseup',Up);
	 		$(this)[0].releaseCapture&&$(this)[0].releaseCapture();
	 		return false;
	 	})
	 })
	 //找最近的那个li
	function getNear(obj){
		//obj的中心点坐标
		var x = obj.offsetLeft+obj.offsetWidth/2;
		var y = obj.offsetTop+obj.offsetHeight/2;
		var oPeng=[];
		for(var i=0;i<aLi.length;i++){
			if(test(aLi[i],obj)){
				if(!has(oPeng,aLi[i]).has){
					oPeng.push(aLi[i]);
					
				};
			}else{
				if(has(oPeng,aLi[i]).has){
					var index = has(oPeng,aLi[i]).index;
					oPeng.splice(index,1);
				}
			}
		};
		//console.log(oPeng[0].index)
		//找最小距离
		var dis=[];
		for(var i=0;i<oPeng.length;i++){
			var x1 = oPeng[i].offsetLeft+oPeng[i].offsetWidth/2;
			var y1 = oPeng[i].offsetTop+oPeng[i].offsetHeight/2;
			var c = (x1-x)*(x1-x)+(y1-y)*(y1-y);
			var json={
				obj:oPeng[i],
				dis:c
			};
			dis.push(json);
		}
		dis.sort(function(n1,n2){
			return n1.dis - n2.dis;
		});
		if(dis[0]){
			return dis[0].obj;
		};
	};

	//检测碰撞函数
	function test(obj1,obj2){
		if(obj1 == obj2) return;
		var l1 = obj1.offsetLeft;
		var t1 = obj1.offsetTop;
		var r1 = obj1.offsetLeft+obj1.offsetWidth;
		var b1 = obj1.offsetTop+obj1.offsetHeight;

		var l2 = obj2.offsetLeft;
		var t2 = obj2.offsetTop;
		var r2 = obj2.offsetLeft+obj2.offsetWidth;
		var b2 = obj2.offsetTop+obj2.offsetHeight;
		if(l1>r2||t1>b2||r1<l2||b1<t2){
			return false;
		}else{
			return true;
		};
	};

	//判断数组中存不存在
	function has(arr,n){
		for(var i=0;i<arr.length;i++){
			if(arr[i] == n){
				return {has:true,index:i};
			}
		}
		return {has:false,index:-1};
	};
});


