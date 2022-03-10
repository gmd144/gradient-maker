var color1 = document.querySelector("#color1");
var c1 = document.querySelector("#c1");
var color2 = document.querySelector("#color2");
var c2 = document.querySelector("#c2");

var btn = document.querySelector("button");

random();

function update(){
    c1.textContent = color1.value;
    c2.textContent = color2.value;
    document.body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}


color1.addEventListener("input", update);
color2.addEventListener("input", update);


function random(){
    color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
    update()
}


btn.addEventListener("click", random);

window.addEventListener("keyup", function(e){
    if (e.keyCode === 32){
        e.preventDefault();
        random();
    }
});