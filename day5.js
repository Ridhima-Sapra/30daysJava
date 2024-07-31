
// Task/Activity :

// Activity 1: Function Delcaration

// Task 1: write a function to check if a number is Even or Odd and log to the console 

function even_odd(num){
    return (num%2) ? "even" : "odd";
}
let num =39;
console.log("Number is",even_odd(num));
// Output : odd

// Task 2: Write a function to calculate the square  of a number and return the result 

function squar(num1){
    return num1*num1;
}
num = 5;
console.log("square of num(5) : ",squar(num));


// Activity 2 : Function Expression 

// Task 3: Write a function expression to find the maximum of two number and log thr result to the console 
let a = 7;
let b = 8;
const maxi = function (num1,num2){
    if(num1>num2){
        return num1;
    }
    else 
        return num2;
}
console.log("maximu of a(7) and b(8) : ",maxi(a,b));

// Task 4: Write a function expression to concatinate two string and returns the result.

const concat = function (str1,str2){
    str1 = str1 +" " + str2;
    return str1;
}
let str1 = "B.tech";
let str2 = " is Dangerous for health";

console.log("concatinated result : ", concat(str1,str2));


// Activity 3: Arrow Functions

// Task 5: Write an Arrow function to calculate the sum of two number and return  the result.

const sum = (a,b) => {
    return a+b;
}
console.log("a + b =",sum(a,b));
// output : a+b = 15;

// Task 6 : write an arrow function to check if a string contains a specific character and return a boolean value

const isspecific = (str,size) =>{
    for(let i = 0;i<size;i++){
        if(str[i] == '!' || str[i] == '@' || str[i] == '#' ||str[i] == '$' ||str[i] == '^' ||str[i] == '&' ||str[i] == '*' ||str[i] == '?' ||str[i] == '`' ||str[i] == '~'){
            return true;
        }
    }
    return false;
}
str1 = "ridhima@10"
console.log(isspecific(str1,10));
// True 


// Task 7: Write a Function that takes two parameter and returns their product. Provide a default valur for the second parameter

const product = (a,b = 10) => {
     return a*b;
}
a = 7;
console.log("product =",product(a));
// Outout : 70



// TAsk 8 : Write a function that takes two parameter that takes a person's name and age and retunr a greeting messege.Provide a default value for the age.

const greet = (pname, age = 20) =>{
    console.log("Hey",pname, ", Good morning!!");
}
let pname = "ridhima";
greet(pname,18);

// Acticity 5: Higher order function 

// Task 9 : Write a higher order function that takes a function and a number and calls the function that many times
function repeatFunc(func, times) {
    return function(x) {
        for (let i = 0; i < times; i++) {
            x = func(x);
        }
        return x;
    };
}

function double(x) {
    return x * 2;
}

const repeatDouble = repeatFunc(double, 3); // Create a function that doubles 3 times

console.log(repeatDouble(2)); // Output: 16


// Task 10 : Write a higher order function that takes two function and a value,applies the first funtion to value and  the second function  to the resulte.

function highfunc(func1, func2, value) {

    let result1 = func1(value);
   
    let result2 = func2(result1);
    return result2;
}

function double(x) {
    return 2 * x;
}

function square(x) {
    return x ** 2;
}


let result1 = highfunc(double, square, 3);
console.log(result1); // Output: 36

let result2 = highfunc(square, double, 4);
console.log(result2); // Output: 32
















