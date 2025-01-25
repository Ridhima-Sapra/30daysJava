const form=document.getElementsByClassName("form")
const submit=document.querySelector("#subt")
const guessSlot=document.querySelector(".guesses")
const remaining=document.querySelector(".lastResult")
const lowOrHi=document.querySelector(".lowOrHi")
const input=document.getElementById("guessField")
const startOver=document.querySelector(".resultParas")
const p=document.createElement("p")

let correctNo=Math.round(Math.random()*100+1)
let playgame=true;
let noOfGuesses=0;
let prevGuess=[];
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        
        const Userinput=parseInt(input.value)
       console.log(Userinput)
       validate(Userinput);    
        
    });
}

function validate(input){
    if(isNaN(input)){
        alert("please enter valid")
    }
    else if(input>100 || input<0){
        alert("please enter in valid range")
    }
    else{
        prevGuess.push(input)
        noOfGuesses++;
        if(noOfGuesses==10){
            displayGuess(input)
            displayMessage(`guesses over!! No was ${correctNo}`)
            endGame()
        }
        else{
            displayGuess(input)
            checkGuess(input);
        }
        
    }
}
function checkGuess(input){
    if(input=== correctNo){
        displayMessage("you guessed it right")
        endGame()
    }
    if(input< correctNo){
        displayMessage("No is too low")
    }
    if(input> correctNo){
        displayMessage("No is too high")
    }
}
//cleanup
function displayMessage(msg){
    lowOrHi.innerHTML=`<h2>${msg}</h2>`
}

function displayGuess(){
    // guess=" "
    guessSlot.innerHTML +=`${input}  `
    // noOfGuesses++;
    remaining.innerHTML=`${10-noOfGuesses}`
}   
function newGame(){
    const newGameButton=document.querySelector("#newGame")
    newGameButton.addEventListener('click', function(e){
        correctNo=Math.round(Math.random()*100+1)
        prevGuess=[]
        noOfGuesses = 0; // Corrected reset logic

        

        guessSlot.innerHTML =" "
        remaining.innerHTML=`${10-noOfGuesses}`
        input.removeAttribute('disabled')
        startOver.removeChild(p)
        playgame=true;

    })
}
function endGame(){
    input.value=" "
    input.setAttribute("disabled", " ")
    p.classList.add("button")
    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playgame=false;
    newGame();
}
    /*
const form = document.querySelector(".form");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const input = document.getElementById("guessField");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");

let correctNo = Math.round(Math.random() * 100 + 1);
let playgame = true;
let noOfGuesses = 0;
let prevGuess = [];

if (playgame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const userGuess = parseInt(input.value);
        console.log(userGuess);
        validate(userGuess);
    });
}

function validate(userGuess) {
    if (isNaN(userGuess)) {
        alert("Please enter a valid number");
    } else if (userGuess > 100 || userGuess < 1) {
        alert("Please enter a number in the range of 1 to 100");
    } else {
        prevGuess.push(userGuess);
        noOfGuesses++;
        if (noOfGuesses === 10) {
            displayGuess(userGuess);
            displayMessage(`Game over! The correct number was ${correctNo}`);
            endGame();
        } else {
            displayGuess(userGuess);
            checkGuess(userGuess);
        }
    }
}

function checkGuess(userGuess) {
    if (userGuess === correctNo) {
        displayMessage("Congratulations! You guessed it right!");
        endGame();
    } else if (userGuess < correctNo) {
        displayMessage("The number is too low!");
    } else {
        displayMessage("The number is too high!");
    }
}

function displayMessage(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function displayGuess(userGuess) {
    guessSlot.innerHTML += `${userGuess} `;
    remaining.innerHTML = `${10 - noOfGuesses}`;
}

function newGame() {
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener("click", function () {
        correctNo = Math.round(Math.random() * 100 + 1);
        prevGuess = [];
        noOfGuesses = 0;

        guessSlot.innerHTML = "";
        remaining.innerHTML = `10`;
        input.removeAttribute("disabled");
        startOver.removeChild(p);
        playgame = true;
    });
}

function endGame() {
    input.value = "";
    input.setAttribute("disabled", "true");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playgame = false;
    newGame();
}*/
