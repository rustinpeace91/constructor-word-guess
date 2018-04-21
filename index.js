//https://upenn.bootcampcontent.com/upenn-bootcamp/UPENN201801FSF4-Class-Repository-FSF/blob/master/01-Class-Content/11-js-constructors/02-Homework/HomeworkInstructions.md

//take a letter as a user input 
//see if it is included in the word
//fill out the word

//letter.js
    //bottom of the stack
    //requires only itself
    //string value to store underlying character
    //boolean that stores whether that letter has been guessed
    //function that returns the letter if that boolean is true, and an _ if ir's not
    //funcrion that takes a character as an argument and checks it against the underylying character 
//wordjs
    //constructor:
    //an array of new letter objects for each letter of the word
    // a function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)


//Index.js 
    //The file containing the logic for the course of the game, which depends on Word.js and:
    //tandomly selects a word and uses the Word constructor to store it
    //Prompts the user for each guess and keeps track of the user's remaining guesses

    //HINT: If you name your letter's display function toString, JavaScript will call that function automatically whenever casting that object to a string (check out this example: https://jsbin.com/facawetume/edit?js,console)
    
    
var inquirer = require("inquirer");
var Word = require("./word.js");


var indexWordArray = ["lackadaisical", "albatross", "spectacular", "vigorous", "discovery", "zinc"];
var testWord = new Word("albatross");  
var guessesLeft = 15;

//make a function that pics a random word every time the user starts the game.


//the main game function
var game = function(){ 
    guessesLeft = 15;
    randomize();
    guess();
}

//randomizes the word to be guessed
function randomize(){
    var randomInt = Math.floor(Math.random() * indexWordArray.length);
    var theWord = indexWordArray[randomInt];
    testWord = new Word(theWord);
}


//the guess loop. takes user input and lets the user know if they guessed it correctly
function guess(){ 
  inquirer.prompt(
    {
        type: 'input',
        name: 'letter',
        message: "guess a letter",
    }
  ).then(function(answer){
    
        if(testWord.checkWord(answer.letter) === false){
            console.log("wrong guess");
            testWord.returnString();
            guess();
            guessesLeft --;
            console.log("you have " + guessesLeft + " guesses left");
 
        } else {
            console.log("correct!");
            //this is supposed to return the string of the letters guessed and _ for those not guessed. It does not work for some reason. 
            testWord.returnString();
            guess();

        }
  });
};


//runs the game
game();