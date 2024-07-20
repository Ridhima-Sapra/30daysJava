// Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var a=67;
console.log(a); // Output: 67

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.
var b="ridhima";
console.log(b); // Output: ridhima
// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const c=true;
console.log(c); // Output: true
// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.
str="i am a student";
var_bool=false;
var_num=78;
let obj={Name:"kavita" , Relation: "mother"};
let array=[54,87,43,76];
console.log(typeof(str)); // Output: string
console.log(typeof(var_bool)); // Output: boolean
console.log(typeof(var_num)); // Output: number
console.log(typeof(obj)); // Output: object
console.log(typeof(array));// Output: array
// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

{
    let abc=78;
    console.log(abc); // Output: 78
}
abc=899;
console.log(abc); // Output: 899
// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.

const constVar = "old";
console.log(constVar); // Output: old
// constVar = "New "; // Error: Assignment to constant variable