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

//make a function that pics a random word every time the user starts the game. 
var testWord = new Word("albatross");
var game = function(){
    
}

function guess(){ 
  inquirer.prompt(
    {
        type: 'input',
        name: 'letter',
        message: "guess a letter",
    }
  ).then(function(answer){
        if(testWord.checkWord(answer.letter)){
            console.log("yipeee");
            guess();
        } else {
            console.log("wrong letter");
            testWord.checkWord(answer.letter);
            guess();
        }
        //find a way to make it so it does something if the user guesses correctly. 
  });
};

guess();