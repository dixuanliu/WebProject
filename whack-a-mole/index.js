const x = document.getElementById("holes");
let i = 0;
let img = "";
let RandomNum;
let score = 0;
for (i; i < 9; i++) {
	img +=
		"<div class = 'hover'><img src = './img/mouse.png' class = 'MouseImg' id = '" +
		i +
		"MouseImg'><img src = './img/hole.png' class = 'HoleImg'><img src = './img/boom.png' id = '"+i+"boom' class = 'boom'></div>";
}
x.innerHTML = img;
setTimeout(function play(){
    clearInterval
	RandomNum = Math.floor(Math.random() * 9);
	let mouse = document.getElementById(RandomNum + "MouseImg");
	mouse.style.visibility = "visible";
	clearTimeout();
	setTimeout(() => {
		mouse.style.visibility = "hidden";
	}, 1000);
    setTimeout(play, 1500);
},0);
document.addEventListener("mousedown", (event) => {
    x.style.cursor = "url('./img/hammerdown.ico'),pointer";
    if (event.target.className === "MouseImg") {
        score+=1;
        document.getElementById("score").innerHTML = score;
        let boom = document.getElementById(RandomNum+"boom");
        boom.style.visibility = "visible"
        clearTimeout();
        setTimeout(() => {
            boom.style.visibility = "hidden"
        }, 500);
    }
});
document.addEventListener("mouseup", (event) => {
    x.style.cursor = "url('./img/hammer.ico'),pointer";
});

