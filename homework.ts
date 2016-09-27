// type any string with an number and console.log just a number

function findNum(word:string){

  // make a function

  //console.log(word);
  // loop through string
  //let newArray = word.split(" ");
  let newWord = word.replace(/\D/g, '');
  console.log(newWord);
  return newWord;
  //let numberArray = [];
//  console.log(newArray);
  //put letters into an array

  // loop through array
  // for(let i = 0; i < newArray.length; i++){
  //
  // }
  //search for numbers

  // parse number
}

//findNum("This is a sentence with 42");
findNum("This is a sentence with 42");
findNum("hi 22");
