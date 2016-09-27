// console.log("hello stuff");
//
// // global scope is the global envirement
// // defined in the global scope
// let dogName = "Havoc";
// let test;
// console.log(dogName);
//
// function doSomething(){
//   console.log(dogName);
// }
//
//
//
// test = "something";

// function scope

function dogSomething(){
  let something = 'walk dog';
  console.log(something);
}

let dog = "bacon";

function doSomethingElse(){
  let something = 'mow lawn';
  console.log(something);
  console.log(dog);
}
// function within a function

function dogSomething2(){
  let something = 'walk dog';
  console.log(something);
  function doSomethingElse(){
    let something = 'mow lawn';``
    console.log(something);
    console.log(dog);
  }
  doSomethingElse();
}

doSomethingElse();
dogSomething();


// block scope is another way a scope to be created

let today = 'tuesday';

if(today == "tuesday"){
  let message = 'today is tuesday';
  console.log(message);
  console.log(today);
}
// new 2015 doesn't work outside
//console.log(message);

let message = 'goodbye';

if(1 === 1){
  let message = 'hello';
  console.log(message);
}
