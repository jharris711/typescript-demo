// Type annotation:
// Tells ts that apples will always be a number
let apples: number = 5;
apples = 10;
// apples = 'ffffff'

let speed: string = 'fast';
// speed = 10;

let hasName: boolean = true;
// hasName = 'true'

let nothingMuch: null = null;
let nothing: undefined = undefined;
// nothing = 'boop'

// Built in objects:
let now: Date = new Date();

// Array:
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, true, false];

// Classes:
class Car {
  // Props and methods here.
};
let car: Car = new Car();

// Object literal:
let point: { x: number, y: number } = {
  x: 10,
  y: 20,
};

// Function:
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
};

// When to use annotations:
// 1) Function that returns the 'any' type:
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number, y: number} = JSON.parse(json);
console.log(coordinates)

// 2) When we declare a variable on one line 
// and initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3) When we want a variable to have a type 
// that can't be inferred: 
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}