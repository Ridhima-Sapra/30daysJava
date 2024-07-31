//activity 1 : ARITHEMATIC OPERATOR

//task 1 : addition of two numbers
var1=8;
var2=6;
result=var1+var2
console.log("the sum is ", result);
 // output : the sum is 14

//task2 : subtraction of two numbers
var1=8;
var2=6;
result=var1-var2
console.log("the subtraction is ", result);
// output :the subtraction is 2

//task3 : multiplication of two numbers
var1=8;
var2=6;
result=var1*var2
console.log("the multiplication is ", result);
 //  output : the multiplication is : 48

//task4 : division of two numbers
var1=18;
var2=6;
result=var1/var2
console.log("the division is ", result);
 //  output : division is 3

//task5 : remainder when one number is divided by other
var1=8;
var2=6;
result=var1+var2
console.log("the remainder is ", result); 
//  output : remainder is 2



//activity 2 : ASSIGNMENT OPERATOR


//task6 : addition assignment operator (+=)
var1=8;
var2=6;
var1+=var2    // var1= var1+ var2
console.log("the result is ", var1);
 //  output : the result is  14

//task 7 : subtraction assignment operator (-=)
var1=8;
var2=6;
var1-=var2    // var1= var1- var2
console.log("the result is ", var1);
 //  output : the result is  2



//activity 3 : COMPARISION OPERATOR

//task 8 : less than and greater than operator
var1=8;
var2=6;
console.log("8>6 is", var1>var2);
 // output : greater then operator 10>8 :true
var1=8;
var2=6;
console.log("8<6 is", var1<var2);
 // output : less than operator 8<10 : false

//task 9 : less than or equal to and greater than or equal to operator
let var1 = 5;
let var2 = 6;
let var3 = 6;
console.log("greater than equal to operator 5>=6 :",var1>=var2);
 // output : greater than equal to operator 5>=6 :false
console.log("less then equal to operator 6<=6: ",var2<=var3); 
// output : less then equal to operator 6<=6: true

//task 10 : equal to operator
var1=998;
var2=998;
console.log("result for var1==var2", var1==var2);
console.log("result for var1==var2", var1===var2);
 // output : result for var1 == var2 : true
// output : result for var1===var2 : true



//activity 4 : LOGICAL OPERATOR

//task11 : AND operator
var1=998>877;
var2=998<78;
console.log("result for var1 and var2 with AND operator", var1 && var2);
// output : result for var1 and var2 AND operator : false

//task12 : OR operator
var1=998>877;
var2=998<78;
console.log("result for var1 and var2 with OR operator", var1 || var2);
// output : result for var1 and var2 OR operator : true
 
//task13 : NOT operator
var1=998>877; // this is true
var2=998<78; // this is false
console.log("result for var1 and var2 with NOT operator", var1 != var2);
// output : result for var1 and var2 NOT operator : true




//acticity 5 : TERNARY OPERATOR

//task 14 : ternary operator
78>87?console.log("78 is grater than 87") : console.log("78 is not grater than 87");
// output : 25 is positive



//feature 1 :
// ARITHEMATIC operator
let num1=7;
let num2=3;
console.log("7+3  : ", num1+num2);
// output : 7+3 : 10

console.log("7-3 : ", num1-num2);
// output : 7-3 : 4

console.log("7*3 : ", num1*num2);
 // output : 7*3 : 21
 
 console.log("7/3 : ", num1/num2);
// output : 7/3 : 2.33
console.log("7%3 : ", num1%num2);
// output : 7%3 : 1



//feature 2 : COMPARISION OPERATOR
let v1=20;
let v2=10;
let result1 = (v1 > v2) && (v1 <v2) ;
let result2 = (v1 > v2) || (v1 > v2) ;
let result3 = !(v1=== v2) ;
console.log("result of 20>10 and 20<10 :",result1);
  // output :  result of 20>10 and 20<10 : false
  console.log("result of 20>10 and 20<10 :",result2);
 //  output : result of 20>10 or 20<10 : true
 console.log("result of 20>10 and 20<10 :",result3);
 // output :  result of comparision operator : is 20 equal to 10??  true



