var animals = ['duck', 'tigers', 'bear', 'cheeta'];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
for (var key in animals) {
    console.log(animals[key]);
}
var animals2 = {
    tiger: "high",
    gorilla: "med"
};
for (var key in animals2) {
    console.log(animals2[key]);
}
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var value = animals_1[_i];
    console.log(animals);
}
