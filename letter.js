
var Letter = function(letter){
    this.letter = letter;
    this.guessed = false;
    this.returnGuessed = function(){
        if(this.guessed === true){
            return this.letter;
        } else {
            return "_ ";
        }
    };
    this.checkIfGuessed = function(guess){
        if(guess === this.letter){
            this.guessed = true;
            console.log("correct!")
            return true;
        } 
    };

}


module.exports = Letter;