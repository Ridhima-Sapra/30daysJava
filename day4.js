// Activity 1: For Loop

// • Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for(let i=1;i<=10;i++){
    console.log("${i}");
} 
/* OUTPUT : 
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    */

// • Task 2: Write a program to print the multiplication table of 5 using a for loop.
for(let i=1;i<=10;i++){
    console.log("5 X ${i} = ", 5*i);
}
// output : 
// 5 X  1  =  5
// 5 X  2  =  10
// 5 X  3  =  15
// 5 X  4  =  20
// 5 X  5  =  25
// 5 X  6  =  30
// 5 X  7  =  35
// 5 X 8  =  40
// 5 X  9  =  45
// 5 X  10  =  50

// Activity 2: While Loop

// • Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i=1;
let sum=0;
while(i<=10){
    sum+=i;
    i++;
}
console.log("sum is : ", sum); //OUTPUT: sum is :  55

// • Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let a=10;
while(a!=0){
    console.log(a);
    i--;
}
// output : 10 9 8 7 6 5 4 3 2 1

// Activity 3: Do... While Loop

// • Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
num=1;
do{
    console.log(num);
    num++;
}while(num<=5);
// output : 1 2 3 4 5

// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let n=5;
let fact=1;
do{
    fact *=n;
    n--;
}while(n!=0);
console.log(fact);  //OUTPUT: 120
// Activity 4: Nested Loops
// • Task 7: Write a program to print a pattern using nested for loops:

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
// output : 
// *
// **
// ***
// ****
// *****

// ACTIVITY 5
// TASK 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
let m=1; 
while(m<=10){
    {
        if(m==5) continue;
    }
    console.log(m);
} // output : 1 2 3 4 6 7 8 9 10

// TASK 9 : Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for(let a=1;a<=10;a++){
    console.log(a);
    if(a==7) break;
} // output : 1 2 3 4 5 6