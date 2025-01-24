const countEle=document.querySelector(".counter");
const loadingFrontEle=document.querySelector(".loading-bar-front");
let index=0;
uptateCounter();
function uptateCounter(){
    countEle.innerHTML=index +"%";
    loadingFrontEle.style.width=index + "%";
    index++;
    if(index <101){
        setTimeout(uptateCounter,20)
    }
}