const btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    document.body.style.background=randomColor();
});
function randomColor(){
    return `hsl(${Math.floor(Math.random()*360)},100%,50%)`;
}