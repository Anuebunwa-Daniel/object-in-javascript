//objeects
//syntax
var car ={
    name: "Benz",
    mileage: 1000,
    color: 'silver'
}
// instance of an object
//  create a dog object
let dog ={
    dogName: 'Bingo',
    weight: 3.5,
    color: 'light brown',
    breed: 'Dobberman',
    age:3,
    burglarBitter: false
}; //A dog object with its properties.

//referenceing/getting the values from the object
//1. Dot notation
var theNameOfOurDog = dog.dogName;
console.log(dog.dogName);
console.log(theNameOfOurDog);

//reference the car name
var carName = car.name;
console.log (car.name);
// or
console.log (carName);

// 2. Bracket Notation
var age =dog['age'];
console.log (dog['age'])

//reference the car mailleage with bracket notation

var mileage = car['mileage'];
console.log (car['mileage']);


// printing object
console.log (dog);
//updating objects
dog.age = 5;
console.log (dog);
dog.breed = "cucassian";
console.log (dog);

//classwork

var myCar = {
    make: "toyota",
    model: "corolla",
    color: "ment black",
    year:  1907,
    starter: 'push to start',
    edition: 'sport edition ',
    otherSpec: 'limited edition'
}

console.log (myCar);

var color = "color";
myCar[color] ="blue";
console.log (myCar);

var color = 'forSale'
myCar[color] = true;
console.log (myCar);

console.log (myCar ['make']) ;
console.log (myCar ['model']) ;




