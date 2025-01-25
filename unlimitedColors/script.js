// generate Random colours
// on clicking start color of bg should randommly change and on stop stop

const hex="0123456789"
const color="#"
const generateRandomColor=function(){
    const hex="0123456789"
    const color="#"
    for(let i=0;i<6;i++){
        color+=hex[Math.round(Math.random()*10)]
    }
    return color;
}
//global scope needed
let IntervalId
const startbtn=document.getElementById("start")

const stopbtn=document.getElementById("stop")


const Startchangebg=function(){
    if(!IntervalId){
        IntervalId=setInterval(changeBg,2000)
    }
   
    const changeBg=function(){
        document.body.style.backgroundColor=generateRandomColor()
    }
}
const StopChangeBg=function(){
    clearInterval(IntervalId)
    IntervalId=null // cleaner code edge case
}


startbtn.addEventListener('click' , Startchangebg)


stopbtn.addEventListener('click', StopChangeBg)

// learning
// setTimeOut mei jo actually funct perform hora vo daalana as change bg in this
// fir jis ite pe click krne pe vo function hona chaiye usse select KeyboardEventthen uspe eventListener lga k set/clearInterval vaale
// func ka reference daal do
// clear vaale mei always reference aata setInterval vaale se