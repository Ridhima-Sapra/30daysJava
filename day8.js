//ACTIVITY 1 : TEMPLATE LITERALS

//task 1 :  create a string using template literals that includes person's name and age
let greet=`hi ridhima. what's your age..... oh 26 great`
console.log(greet);
// output : hi ridhima. what's your age


//task 2 : multi-line string using template literals
multiline=`hi!! my name is ridhima
i am a student pusuing btech`
console.log(multiline);
// output :
// hi!! my name is ridhima
// i am a student pusuing btech


//ACTIVITY 2 : DESTRUCTURING

//task 3 : array destructuring to extract 1st and 2nd element from array of numbers
let arr=[79,778,79,554,907,567]
let [a,b,...c]=arr
console.log("First element :",a);
console.log("Second element :",b);
// output : First element :79 ; Second element : 778


//task 4 : object destructuring to extract title and author from a book object
const book={
    author:"R.K. Narayan",
     title:"Swami and his friends",
    year:1999

}
let{author,title,...bb}=book
console.log(author);
console.log(title);
//output:
// R.K. Narayan
// Swami and his friends


//ACTIVITY 3 : SPREAD AND REST OPERATORS

//task 5 : Use the spread operator to create a new array that includes all 
// elements of existing array and additional elements. Log the new array to the console.
let array=[8,78,4,44,90]
let newArray=[788,89,...array]
console.log("Updated array :",newArray)
// output:
// Updated array : [788, 89, 8, 78, 4, 44, 90]


//task 6 :  use rest operator in a function to accept any number of arguments
// sum them and return the result
let sum=0
sumFunc=function (...args){
    for(let i of args){
        sum+=i
    }
 return sum;
}
let ans=sumFunc (1,2,3);
console.log(ans);
//output : 6



//ACTIVITY 4 : DEFAULT PARAMETERS

//task 7 : function that takes 2 parameters & returns their product with 
// second parameter having default value 1. call this function with the second 
// parameter
productFunc=function(a,b=1){
        return a*b;
}
let res=productFunc(2,4);
console.log(res);
//output: 8
//ACTIVITY 5 : ENHANCED OBJECT LITERAL

//task 8 : use enhanced object literals to create an object with methods and properties
Name="ridhima"
age=18
Study="B.tech 2nd year"
prop="favouriteColour"
person={
    Name,
    age,
    [prop]:"Lavendar",
    year: ()=>Study,
    greetings (){
        console.log(`Greetings everyone!! . My Name is ${this.Name}`)
    }
}
console.log(person.Name)
console.log(person.favouriteColour)
console.log(person.year())
person.greetings()
//output
// ridhima
// Lavendar
// B.tech 2nd year
// Greetings everyone!! . My Name is ridhima


//task 9 : create an object with computed property names based on variables
let myName="yourName"
let myage="yourAge"
obj={
    [myName]: "Ridhima",
    [myage] : "18"
}
console.log("Name is: ", obj.yourName)
console.log("Age is: ", obj.yourAge)
//output :
// Name is:  Ridhima
// Age is:  18