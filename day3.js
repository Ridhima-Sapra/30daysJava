

//ACTIVITY 1: IF-ELSE STATEMENT

  //Task 1: Write a program to check if a number is positive,negative or zero,log the result to console
let a=675;
if(a>0){
    console.log("${a} is positive");            //OUTPUT: 675 is positive
}
else if(a==0){
    console.log("${a} is zero");
}
else{
    console.log("${a} is negitive");
}

// TASK 2:  Write a program to check if a person is elegible to vote(Age>=18) and log the result to the console.

let age= 3;
if(age>=18){

    console.log("you can vote");
}
else{
    console.log("you can not vote");         //OUTPUT: you can not vote
}
// Activity 2 : NESTED IF-ELSE STATEMENTS

  //Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let A=32;
let B=8;
let C=65;
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
}        //OUTPUT: 65 is greatest
//Activity 3: Switch Case

  //Task 4 : Write a program that uses Switch Case to determine the day of the week based on a number (1-7) and log the result to console.

let day=6;
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
        console.log("SATURDAY");   
        break;} 
        case 6:{
            console.log("SUNDAY");    //OUTPUT: SUNDAY  
            break;} 
    default: 
        console.log(" INVALID DAY");    
}
//TASK 5: Write a program that uses switch case to determine to assign a grade ('A','B','C','D','F') and log the result to console.
let marks=54;
switch(1){
    case 90<=marks:
        console.log("A");
        break;
    case 80<=marks<90:
        console.log("B");
        break;    
    case 70<=marks<80:
        console.log("C");
        break;
    case 60<=marks<70:
        console.log("D");
        break;
    case 50<=marks<60:
        console.log("E");
        break;
    case 40<=marks<50:
        console.log("F");
        break; 
    default:
        console.log("FAIL");       
}                //OUTPUT: E
//ACTIVITY 4: Conditional (ternary) operator

  //Task 6 : Write a program that uses ternary operator to check if number is even or odd and log the result to console.

  num = prompt("enter a number: ");
  console.log(num%2==0 ? " Even." : "Odd.") ;    //OUTPUT : Even.

//Activity 5: COMBINING CONDITIONS

   // Task 7:Write a program to check if year is leap year using multiple conditions(divisible by 4 but not 100 unless also divisible by 400) and log the result to console.
  
 a=2055;
 if((a%4==0 && a%100!=0) || a%400==0){
    console.log("LEAP YEAR");       
 } 
 else{
    console.log("NON LEAP YEAR");       
 }           //OUTPUT: NON LEAP YEAR