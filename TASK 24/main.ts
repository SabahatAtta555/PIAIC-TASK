//--------------------------------------TASK 24------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024
/*

*/
// Tests for equality and inequality with strings
const fruit1: string = 'apple';
const fruit2: string = 'banana';

console.log(`Is ${fruit1} equal to ${fruit2}? ${fruit1 === fruit2}`); // False
console.log(`Is ${fruit1} not equal to ${fruit2}? ${fruit1 !== fruit2}`); // True

// Tests using the lower case function
const city: string = 'New York';
const lowercaseCity: string = city.toLowerCase();

console.log(`Is ${city} in lowercase equal to 'new york'? ${lowercaseCity === 'new york'}`); // True

// Numerical tests
const num1: number = 10;
const num2: number = 5;

console.log(`Is ${num1} greater than ${num2}? ${num1 > num2}`); // True
console.log(`Is ${num1} less than or equal to ${num2}? ${num1 <= num2}`); // False

// Tests using "and" and "or" operators
const sunnyDay: boolean = true;
const weekend: boolean = false;

console.log(`Is it a sunny day AND a weekend? ${sunnyDay && weekend}`); // False
console.log(`Is it a sunny day OR a weekend? ${sunnyDay || weekend}`); // True

// Test whether an item is in an array
const fruits: string[] = ['apple', 'banana', 'orange'];

console.log(`Is 'banana' in the fruits array? ${fruits.includes('banana')}`); // True

// Test whether an item is not in an array
console.log(`Is 'grape' not in the fruits array? ${!fruits.includes('grape')}`); // True
