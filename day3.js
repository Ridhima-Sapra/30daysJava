//TASK 1
let a=prompt("enter  a number");
if(a>0){
    console.log("${a} is positive");
}
else if(a==0){
    console.log("${a} is zero");
}
else{
    console.log("${a} is negitive");
}

// TASK 2
let age= prompt("enter your age: ");
if(age>=18){

    console.log("you can vote");
}
else{
    console.log("you can not vote");
}
//ACTIVITY 2
//TASK 3
let A=prompt("enter  a number");
let B=prompt("enter  a number");
let C=prompt("enter  a number");
if(A>B){
    if(A<C){
        console.log("${C} is the greatest");
    }
    else {
        console.log("${A} is the greatest");
    }
}
else{
    if(B<C){
        console.log("${C} is the greatest");
    }
    else {
        console.log("${B} is the greatest");
    }
}
//TASK 4
let day=prompt("enter  a number");
switch(day){
    case 1:{
        console.log("MONDAY");
        break;}
    case 2:{
            console.log("TUESDAY");
            break;}
    case 3:{
        console.log("WEDDAY");
        break;}
    case 4:{
        console.log("THURSDAY");
        break;}
    case 5:{
        console.log("FRIDAY");
        break;}
    case 6:{
        console.log("SATDAY");   
        break;} 
    default: 
        console.log("SUNDAY");    
}