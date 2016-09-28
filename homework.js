function guessWordGame(word) {
    console.log("hi");
    var wordArray = ["cat", "dog", "rabbit", "mouse", "bacon"];
    var rand = Math.floor((Math.random() * 5) + 1);
    for (var i = 0; i <= 6; i++) {
        var wordGuessPrompt = prompt("Choose a letter");
        if (rand == 1 && wordGuessPrompt == "c") {
            console.log(wordArray[0] + ", You won");
            break;
        }
        else if (rand == 2 && wordGuessPrompt == "d") {
            console.log(wordArray[1] + ", You won");
            break;
        }
        else if (rand == 3 && wordGuessPrompt == "r") {
            console.log(wordArray[2] + ", You won");
            break;
        }
        else if (rand == 4 && wordGuessPrompt == "m") {
            console.log(wordArray[3] + ", You won");
            break;
        }
        else if (rand == 5 && wordGuessPrompt == "b") {
            console.log(wordArray[3] + ", You won");
        }
        else {
            console.log("That is the wrong anwser");
        }
        if (i >= 6) {
            console.log("You lose");
        }
    }
}
guessWordGame("dog");
