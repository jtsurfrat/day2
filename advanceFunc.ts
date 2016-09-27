// optional parameters
//
// let addNumbers = function(number1:number, number2:number){
//   return number1 + number2;
// }

let res = addNumbers(5,32);
// optional parameters
function printError(errorMessage?:string){
  if(errorMessage){
    console.error(`error: ${errorMessage}`);
  } else {
    console.log(`Something went wrong`);
  }
}

printError("404 page not found");
printError();

//rest parameters

function addNumbers2(...numbers:number[]){
  let result = 0;
  for(let i = 0; i < numbers.length; i++){
    result = result + numbers[i];
  }
  return result;
}


// fat arrow functions

//(p1, p2, ..., pN) => {*code*}
// return a single value
// () => value

// p1 => { code black}

// pre es2015
// let addOne = function(value){
//   return value + 1;
// }

// let addOne = (value) => {
//   return value + 1;
// }
//
// let addOne2 = value => value + 1;

let product = {
  name: "milk",
  price: 2
}
product.name
product.price = 3.00;
