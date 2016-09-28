let animals = ['duck', 'tigers', 'bear', 'cheeta'];

for(let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

for(let key in animals){
  console.log(animals[key]);
}

let animals2 = {
  tiger: "high",
  gorilla: "med"
}

for(let key in animals2){
  console.log(animals2[key]);
}

for(let value of animals){
  console.log(animals);
}
