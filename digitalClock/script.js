const clock=document.querySelector("#clock")

setInterval(function (){
    const date=new Date()
clock.innerHTML=date.toLocaleTimeString()
},1000)



// learning
// set interval ek funciton h cron job krne ki ni jaruart ye function pta hona chaiye