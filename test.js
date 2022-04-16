/*
1) Create a function that receives an array of positive integers 
and returns an array with only the input’s pair numbers.
For example:
[INPUT]  array = [1 2 3 4];
[OUTPUT] array = [2, 4];
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let pairNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    pairNumbers.push(numbers[i]);
  }
}
console.log(pairNumbers);

/* 2) Create a function that receives a String as parameter and returns
  a Boolean value indicating if the word is a palindrome* or not.*/

let word1 = "refer";
let word2 = "hello";

const palindrome = (string) => {
  let reverseString = string.split("").reverse().join("");
  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
};
console.log(palindrome(word1));
console.log(palindrome(word2));

/* 3) Using any JavaScript object creation pattern, create a Car object
 with the following attributes and methods:
 **  Attributes
 *  String: make *  String: model *  boolean: turnedOn *  int: engineDisplacement (cylinder volume)
 *  int: year

**  Methods:
 *  boolean: isOn() *  void: turnOn() *  void: turnOff()
 *  *  String: toString() [returns year, make, model and the engine displacement (cc)]
 *  * String: getMarketingData() [returns make, model and year]
*/

const Car = {
  make: "Toyota",
  model: "Corolla",
  turnedOn: false,
  engineDisplacement: "1800cc",
  year: "2018",
};

const isOn = () => {
  if (Car.turnedOn === true) {
    return true;
  } else {
    return false;
  }
};

const turnOn = () => {
  Car.turnedOn = true;
};

const turnOff = () => {
  Car.turnedOn = false;
};

const toString = (vehicle) => {
  return `${vehicle.year} ${vehicle.make} ${vehicle.model} ${vehicle.engineDisplacement}`;
};

const getMarketingData = (data) => {
  return `${data.make} ${data.model} ${data.year}`;
};

console.log(toString(Car));
console.log(getMarketingData(Car));
console.log(Car.turnedOn);
turnOn();
console.log(Car.turnedOn);

/* 4) Create a Bicycle object with only the make [String] , model [String] and year [int] attributes and no methods. 
  Instantiate it and print to the console its internal state calling the getMarketingData method from the Car object.*/

const Bicycle = {
  make: "GT",
  model: "Karakoram",
  year: "2018",
};

console.log(getMarketingData(Bicycle));
