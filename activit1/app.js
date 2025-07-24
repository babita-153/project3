let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let div=document.querySelector("div");

btn.addEventListener("click",function(){
   let color=getRandomColor();
    h1.innerHTML=`RGB value of random generate color<br><h4 id="clr">${color}</h4>`;
    let clr=document.querySelector("#clr");
    clr.style.color=color;
    div.style.backgroundColor=color;

})

function getRandomColor(){
    let red=Math.floor(Math.random()*255)+1;
    let green=Math.floor(Math.random()*255)+1;
    let blue=Math.floor(Math.random()*255)+1;
    let randomColor=`rgb(${red},${green},${blue})`;
    return randomColor;
}
