function DOMReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){
			fn&&fn();
		},false);
	}else{
		document.attachEvent('onreadystatechange',function(){
			if(document.readystate == 'commplete'){
				fn&&fn();
			}
		})
	}
};
DOMReady(function(){
	var oUl = document.getElementById('ul');
	var aLi = oUl.children;
	var oLift = document.getElementById('left');
	var oRight = document.getElementById('right');
	
	var n = 0;

	var timer = null;
	oUl.innerHTML += oUl.innerHTML;
	oUl.style.width = aLi[0].offsetWidth*aLi.length+'px';
	
	ToLeft();
	oLift.onclick = ToLeft;
	oRight.onclick = ToRight;
	function ToLeft(){
		clearInterval(timer);
		timer = setInterval(function(){

		n -= 5;
		if(n <= -oUl.offsetWidth/2){
			n = 0;
		};
			oUl.style.left = n + 'px';
		},30);
	};
	function ToRight(){
		clearInterval(timer);
		timer = setInterval(function(){
			n += 5;
			if(n >0){
				n = -oUl.offsetWidth/2;
			}
			oUl.style.left = n+'px';
		},30)
	};
});
