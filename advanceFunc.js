var res = addNumbers(5, 32);
function printError(errorMessage) {
    if (errorMessage) {
        console.error("error: " + errorMessage);
    }
    else {
        console.log("Something went wrong");
    }
}
printError("404 page not found");
printError();
function addNumbers2() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i - 0] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result = result + numbers[i];
    }
    return result;
}
var product = {
    name: "milk",
    price: 2
};
product.name;
product.price = 3.00;
