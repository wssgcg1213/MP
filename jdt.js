/**
 * 获取鼠标在页面上的位置
 * @param ev		触发的事件
 * @return			x:鼠标在页面上的横向位置, y:鼠标在页面上的纵向位置
 */
function getMousePoint(ev) {
	var point = {
		x:0,
		y:0
	};

	if(typeof window.pageYOffset != 'undefined') {
		point.x = window.pageXOffset;
		point.y = window.pageYOffset;
	}
	else if(typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
		point.x = document.documentElement.scrollLeft;
		point.y = document.documentElement.scrollTop;
	}
	else if(typeof document.body != 'undefined') {
		point.x = document.body.scrollLeft;
		point.y = document.body.scrollTop;
	}

	point.x += ev.clientX;
	point.y += ev.clientY;

	return point;
}


function handler(ev){
	container.onmousemove=function (ev){
		pauseit();
		var cursorPos = getMousePoint(ev);
			if(cursorPos.x-132>=0&&cursorPos.x-132<=140){
				var width = cursorPos.x-132;
			}
		ed.style.width = width +"px";
		audio.currentTime = (cursorPos.x-132)/140 * audio.duration;
		
	};
}

var audio = document.getElementById("audio");
var container = document.getElementById('jdt_wrap');
var ed = document.getElementById('ed');
container.onmousedown = function(ev){handler(ev);};
container.onmouseup = function(ev){container.onmousemove = null;playit();};

/*
*****
*/
function volume(per){
	var vol = document.getElementById("sound_ed");
	var mute = document.getElementById("sound_mute");
	audio.volume = per / 100;
	vol.style.width = per*0.75+"px";
	if(audio.volume<=0.07){
		mute.style.backgroundPosition = "30px 0px"; 
	}else{
		mute.style.backgroundPosition = "0px 0px"; 
	}
}
function handler2(ev){
	container2.onmousemove=function (ev){
		var cursorPos = getMousePoint(ev);
			if(cursorPos.x-43>=0&&cursorPos.x-43<=77){
				var width = cursorPos.x-43;
			}else if(cursorPos.x-43<0){
				var width=0;
			}else{var width=77;}
		sound_ed.style.width = width/77*75 +"px";
		volume(Math.floor(width *1.3)) ;
	};
}
var container2 = document.getElementById('sound');
var sound_ed = document.getElementById('sound_ed');
container2.onmousedown = function(ev){handler2(ev);};
container2.onmouseup = function(ev){container2.onmousemove = null;};






