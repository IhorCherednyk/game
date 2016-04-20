var deep = document.querySelectorAll(".deep");
var pole = document.querySelector(".pole");
var cnt = document.querySelector(".counter-fill");
var start = document.querySelector(".start");
var obj = document.querySelector('.timer_inp');
var lvlful = document.querySelector('.lvl');
var lvl = lvlful.getElementsByTagName("span");
var timerId;
start.addEventListener("click",startGame);
start.addEventListener("click",timer);
pole.addEventListener("click",click);
lvlful.addEventListener("click",setLvl);

var counter = 0;
var flag = false;
var time = 30;
var curentLvl = 1200;

function setLvl(e){
	curentLvl = +e.target.attributes[0].nodeValue;
}

function startGame(e){
	e = e || event;
	flag = !flag;
	if(flag){
		timerId = setInterval(function() {
			blame();
		}, 2000);
	}else {
		clearInterval(timerId);
		time = 30;
	}	
}
function timer(){
	if(flag){
		time--
		if(time != 0 && time > 0){
			setTimeout(function(){timer();},1000);
		}else{
			clearInterval(timerId);
			time = 30;
			flag = !flag;
		}
	}
	obj.textContent = time + "" ;
}

function click(e){
	e = e || event;
	if(e.target.classList[1]){
		counter +=10;
		e.target.classList.remove("active");
	}else {
		counter -=10;
	}
	cnt.textContent = counter + "";

}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
function blame(){
	var result = getRandomInt(1, 10);
	deep[result].classList.add("active");
	setTimeout(function() {
		deep[result].classList.remove("active")
	}, curentLvl);

}
