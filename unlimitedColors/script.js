// generate Random colours
// on clicking start color of bg should randommly change and on stop stop

const hex="0123456789ABCDEF"
const generateRandomColor=function(){
    let color="#"
    for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
//global scope needed

const startbtn=document.querySelector("#start")
const stopbtn=document.querySelector("#stop")
let TimeoutExecution=null
const ChangeBg=function(){
    document.body.style.backgroundColor= generateRandomColor()
}
const StartChangeBg=function(){
    if(!TimeoutExecution){
        TimeoutExecution=setInterval(ChangeBg,2000)
    }
}
const StopChangeBg=function(){
    clearInterval( TimeoutExecution)
     TimeoutExecution=null
}
startbtn.addEventListener('click',StartChangeBg)
stopbtn.addEventListener('click',StopChangeBg)

// learning
// setTimeOut mei jo actually funct perform hora vo daalana as change bg in this
// fir jis item pe click krne pe vo function hona chaiye usse select KeyboardEventthen uspe eventListener lga k set/clearInterval vaale
// func ka reference daal do
// clear vaale mei always reference aata setInterval vaale se

