//--------------------------------------TASK 24------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024
/*

*/
// Tests for equality and inequality with strings
var fruit1 = 'apple';
var fruit2 = 'banana';
console.log("Is ".concat(fruit1, " equal to ").concat(fruit2, "? ").concat(fruit1 === fruit2)); // False
console.log("Is ".concat(fruit1, " not equal to ").concat(fruit2, "? ").concat(fruit1 !== fruit2)); // True
// Tests using the lower case function
var city = 'New York';
var lowercaseCity = city.toLowerCase();
console.log("Is ".concat(city, " in lowercase equal to 'new york'? ").concat(lowercaseCity === 'new york')); // True
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log("Is ".concat(num1, " greater than ").concat(num2, "? ").concat(num1 > num2)); // True
console.log("Is ".concat(num1, " less than or equal to ").concat(num2, "? ").concat(num1 <= num2)); // False
// Tests using "and" and "or" operators
var sunnyDay = true;
var weekend = false;
console.log("Is it a sunny day AND a weekend? ".concat(sunnyDay && weekend)); // False
console.log("Is it a sunny day OR a weekend? ".concat(sunnyDay || weekend)); // True
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? ".concat(fruits.includes('banana'))); // True
// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? ".concat(!fruits.includes('grape'))); // True
