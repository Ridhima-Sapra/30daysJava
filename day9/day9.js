//ACTIVITY 1 : SELECTING AND MANIPULATING ELEMENTS

//task 1 : select HTML element by its id and change its text content
let contentChange=document.querySelector("#id1");
contentChange.innertext="changed text"
//task 2 : select HTML element by class and change its background color
let  changeColor= (".id2");
changeColor.style.backgroundColor="red"
//ACTIVITY 2 : CREATING AND APPENDING ELEMENTS

//task 3 : create a new div element with some text content and append it to the body
let body=document.querySelector("body");
let div1=document.createElement("div");
div1.style.height="30 px";
div1.style.width="30px";
div1.style.alignContent=right;
div1.innerText="I was added to the body";
div1.style.backgroundColor="turqouish";
body.append(div1);
//task 4 : create a new li element and add it to an existing ul list.
let oldlist=document.getElementById("id4")
let li=createElement(li);
li.innertext="papaya"
oldlist.append(li);
//ACTIVITY 3 : REMOVING ELEMENTS

//Task 5 : select an html element and remove it from DOM
let btn=document.getElementById("id5");
btn.remove()
//Task 6 : remove the last child of a specific html element
body.lastChild.remove();
//ACTIVITY 4 : MODIFYING ATTRIBUTES AND CLASSES

//task 7 :select an html element and change one of its attributes
let link=document.getElementsByTagName("a");
for(let i of link)
    i.href="https://www.google.com/";
//Task 8 : add and remove a CSS class to/from an HTML element
li.fruitslist.add(id)
li.fruitslist.remove(id)
//ACTIVITY 5 : EVENT HANDLING

//Task 9 : add a click event listener to a button that changes the text content of a paragraph
let button=document.getElementById("#btn");
let b=document.querySelector("#p1")
button.addEventListener("click", ()=>{
    button.innertext="Is somebody gonna match my freak.. match my freak"
});
//Task 10 : add a mouseover event listener to an element that changes its border color
p1.addEventListener("mouseover" ,()=>{
    p1.style.border="Solid";
    p1.style.border="black";
})