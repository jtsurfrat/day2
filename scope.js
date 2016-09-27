function dogSomething() {
    var something = 'walk dog';
    console.log(something);
}
var dog = "bacon";
function doSomethingElse() {
    var something = 'mow lawn';
    console.log(something);
    console.log(dog);
}
function dogSomething2() {
    var something = 'walk dog';
    console.log(something);
    function doSomethingElse() {
        var something = 'mow lawn';
        "";
        console.log(something);
        console.log(dog);
    }
    doSomethingElse();
}
doSomethingElse();
dogSomething();
var today = 'tuesday';
if (today == "tuesday") {
    var message_1 = 'today is tuesday';
    console.log(message_1);
    console.log(today);
}
var message = 'goodbye';
if (1 === 1) {
    var message_2 = 'hello';
    console.log(message_2);
}
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(2, 5));
var resAdd = addNumbers(5, 32);
