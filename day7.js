// ACTIVITY 1 : OBJECT CREATION AND ACCESS

//task 1 : create an object representing a book and having properties like author,year and tittle and log it to console
const book={
    author:"R.K. Narayan",
    year:1999,
    title:"Swami and his friends"

};
console.log(book);
/* output : 
{
  
}
  */

//task 2 : access and log the tittle and author of book object
title=book.title;
author=book.author;
console.log("Author of book is : ",author);
console.log("Tittle of book is : ",title);
/* output : 
Author of book is :R.K. Narayan
Tittle of book is : Swami and his friends 
*/

//ACTIVITY 2 : OBJECT METHODS

//task 3 : add a method to book that return a string with book tittle and author and log them to console
book.addmethod= function(){
    return "title is: " +book.title + "and author : " + book.author;
}
console.log(book.addmethod());
//output : tittle is : Swami and his friends and author is : R.K. Narayan

//task 4 : add a method that take a year and update the book year property
yearUpdate= function(yearN){
  
    book.year=yearN; // or this.year=yearN
    return yearN;
}
console.log("Updated year is :", yearUpdate(2015));
//output : Updated year is : 2016

//ACTIVITY 3 : NESTED OBJECTS

//task 5 : create a nested object representing a library with properties like name and books an log library object to console
library={
  name: "THE PUSTAKAALYA",
  books:
  [ {	title: "Anandmath"	, author: "Bankim Chandra Chatterjee"},
    { title: "Bunch of old letters" ,author:	"Jawahar Lal Nehru"},
    { title:"Conquest of self",	author:"Mahatma Gandhi"}
  ]
};
console.log(library);
/* output :
{
  name: 'THE PUSTAKAALYA',
  books: [
  {	title: "Anandmath"	, author: "Bankim Chandra Chatterjee"},
    { title: "Bunch of old letters" ,author:	"Jawahar Lal Nehru"},
    { title:"Conquest of self",	author:"Mahatma Gandhi"}
  ]
}
*/

//task 6 : access of log the name of library and tittle of all books of library
let libname= library.name
console.log("name of library is : ", libname)
console.log("Tittle of books are :");
for(let book=0;book<library.books.length; book++){
  console.log(library.books[book].title);
}
/* output : 
name of library is : THE PUSTAKAALYA
Tittle of books are :
Anandmath
Bunch of old letters
Conquest of self
*/

//ACTIVITY 4 : THE THIS KEYWORD

//task 7 : add a method which uses this keyword to access book tittle and author
book.methodThis= function(){
  return "title is: " + this.title +"and author is: " +this.author;
}

console.log(book.methodThis());

//output : title is: Swami and his friendsand author is: R.K. Narayan

//ACTIVITY 5 : OBJECT ITERATION

//task 8 : for..in loop to iterate properties of object book
for(let p in book){
      console.log(p +" : " + book[p]);
}
/* output : 

*/

//task 9 : use object.keys and object.values methods to log all properties and its values
key = Object.keys(book);
let val = Object.values(book);
console.log("all properties are :",key);
console.log("all values are :",val);
//output : all properties are : ['author', 'year', 'title']
// all values are : ['R.K. Narayan', 2015, 'Swami and his friends']
