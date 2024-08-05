//Activity 1: Basic Error Handling with Try-Catch
//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function ErrorHandle() {
    throw new Error("This is an intentional error!");
}

try {
        ErrorHandle();
} 
catch (error) {
    console.log("error: " + error.message);
}
//Output-error: This is an intentional error!

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divide(a, b) {
    if (b === 0) {
        throw new Error("Denominator is zero!");
    }
    return a / b;
}

try {
    console.log(divide(546, 2)); 
    console.log(divide(5430, 0)); 
} catch (error) {
    console.log("error: " + error.message);
}
//Output-273
// error: Denominator is zero!

//Activity 2: Finally Block
//Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log("Try block");
    throw new Error("Error thrown in try block");
} catch (error) {
    console.log("error: " + error.message);
} finally {
    console.log("Finally block");
}
//output: 
// Try block
// error: Error thrown in try block
// Finally block

//Activity 3: Custom Error Objects
//Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error!");
}

try {
    throwCustomError();
} catch (error) {
    console.log("error: " + error.message);
}

//Task 5 : Write a function that validates user input (eg checking if a string is not empty) and thows a custom error if validation fails. Handle the custom error using a try-catch block

class ValidationError extends Error{
    constructor(msg){
        super(msg);
        this.name = "ValidationError";
    }
}
const checkValid = (s)=>{
    try{
        if(s == "" || s.trim()=='')
            throw new ValidationError("empty string found!");
        else
        console.log("Valid String");
    }
    catch(err){
        console.log(`${err.name} : ${err.message}`);
    }
}

checkValid("");
checkValid("Hello");

/* output : 
ValidationError : empty string found!
Valid String
*/

// ACTIVITY 4 : Error Handling in Promises

//Task 6 : Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console

const randomFunction = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let r = ""
        if(r!="")
            resolve("executed successfully");
        else{
            reject(new Error("something went wrong"));
        }
    },2000);
    })
}
randomFunction().then((msg)=>{
    console.log(msg);
})
randomFunction().catch((err)=>{
    console.log(err.message);
});

//output : executed successfully
//output : Error : something went wrong
//Task 7 : Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects and log the error message

(async function (){
    try{
    let promise = await randomFunction();
    console.log(promise);
    }
    catch(err){
        console.log(err);
    }
})()

//output : executed successfully
//output : Error : something went wrong

// ACTIVITY 5 Graceful Error Handling in Fetch

//Task 8 : Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate message to the console

const URL = 'https://zoo-animals-api.p.rapidapi.com/animals/rand/10/randomData';
const option = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '50920d862amsh183ad305193748dp1d2eb2jsnb6d30ebed125',
		'x-rapidapi-host': 'zoo-animals-api.p.rapidapi.com'
	}
};

const funPromise = ()=>{
    return new Promise((resolve,reject)=>{
        fetch(URL,option).then((response)=>{
            if(response.ok)
                resolve(response.text());
            else{
                reject(`something went wrong   Error : ${response.status}`);
            }
        })
        .catch((err)=>{
            reject(err);
        })
    })
}
funPromise()
.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.log(err);
})


//output : something went wrong   Error : 404


//Task 9 : Use the fetch API to request data from an invalid URL within an async function and handle the error using .catch(). Log an appropriate message to the console


const url = 'https://zoo-animals-api.p.rapidapi.com/animals/rand/10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '50920d862amsh183ad305193748dp1d2eb2jsnb6d30ebed125',
		'x-rapidapi-host': 'zoo-animals-api.p.rapidapi.com'
	}
};

(async function (){
try {
	const response = await fetch(url,options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
})()

//output : 404 (Not Found)
