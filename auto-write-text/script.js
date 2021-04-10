const message="i love listening music <3";
let index=0;
function text(){
    document.body.innerText=message.slice(0,index);
    index++;
    if(index > message.length){
        index=0;
    }
}

setInterval(text,100);
