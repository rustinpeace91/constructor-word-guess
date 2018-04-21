var Letter = require("./letter.js");

var Word = function (word) {
    this.word = word;
    this.wordArray = this.word.split("");
    this.wordObjectArray = [];
    this.createArray = function () {
        for (var i = 0; i < this.wordArray.length; i++) {
            this.wordObjectArray.push(new Letter(this.wordArray[i]));
        };

    };
    this.returnString = function () {
        var theString = ""
        for (var i = 0; i < this.wordObjectArray.length; i++) {
            var x = this.wordObjectArray[i].returnGuessed();
            theString += x;
        }
        console.log(theString);

    };
    this.checkWord = function (letter) {
        if (this.word.indexOf(letter) === -1) {
            return false;
        } else {
            for (var i = 0; i < this.wordObjectArray.length; i++) {
                this.wordObjectArray[i].checkIfGuessed(letter);
            
            }
            return true;
        }
        this.returnString();
    };

}


module.exports = Word;
