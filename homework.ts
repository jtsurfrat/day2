// type any string with an number and console.log just a number

// function findNum(word:string){
//
//   // make a function
//
//   //console.log(word);
//   // loop through string
//   //let newArray = word.split(" ");
//   let newWord = word.replace(/\D/g, '');
//   console.log(newWord);
//   return newWord;
  //let numberArray = [];
//  console.log(newArray);
  //put letters into an array

  // loop through array
  // for(let i = 0; i < newArray.length; i++){
  //
  // }
  //search for numbers

  // parse number
// }

//findNum("This is a sentence with 42");
// findNum("This is a sentence with 42");
// findNum("hi 22");

// function findNum(word:string){
//   let newWord = word.replace(/\D/g, '');
//   console.log(newWord);
//   return newWord;
// }
// findNum("This is a sentence with 42");
// findNum("hi 22");

// function
function guessWordGame(word){
  console.log("hi");
  // let randomWord = Math.random();
  let wordArray = ["cat", "dog", "rabbit", "mouse", "bacon"];

  let rand = Math.floor((Math.random() * 5) + 1);

  // randomWord *= wordArray.length;
  // randomWord = Math.floor(randomWord);
  // console.log(randomWord);
  for(let i = 0; i <= 6; i++){

    let wordGuessPrompt = prompt("Choose a letter");

    if(rand == 1 && wordGuessPrompt == "c"){
      console.log(wordArray[0] + ", You won");
      break;
    } else if(rand == 2 && wordGuessPrompt == "d"){
      console.log(wordArray[1] + ", You won");
      break;
    } else if(rand == 3 && wordGuessPrompt == "r"){
      console.log(wordArray[2] + ", You won");
      break;
    } else if(rand == 4 && wordGuessPrompt == "m"){
      console.log(wordArray[3] + ", You won");
      break;
    } else if(rand == 5 && wordGuessPrompt == "b"){
      console.log(wordArray[3] + ", You won");
    } else {
      console.log("That is the wrong anwser")
    }

    // if(wordGuessPrompt == 'c'){
    //   console.log(wordArray[0] + " " + "you won");
    //   break;
    // } else if(wordGuessPrompt == 'd'){
    //   console.log(wordArray[1] + " " + "you won");
    //   break;
    // } else if(wordGuessPrompt == 'r'){
    //   console.log(wordArray[2] + " " + "you won");
    //   break;
    // } else if(wordGuessPrompt == 'm'){
    //   console.log(wordGuessPrompt[3] + " " + "you won")
    //   break;
    // } else {
    //   console.log("That is the wrong anwser");
    // }

    if(i >= 6){
      console.log("You lose");
    }
  }

  // for(let i = 0; i < wordArray.length; i++){
  //   if(wordArray[i] == randomWord){
  //     console.log("got it");
  //   }
  //   console.log(wordArray[i]);
  // }


  // 5 different words
  // select a single word randomly
  // user must guess one letter
  // if the user is right then word shows
  // if user is wrong guess again 5 more times
  // on the 6 anwser is wrong player looses
}
guessWordGame("dog");
