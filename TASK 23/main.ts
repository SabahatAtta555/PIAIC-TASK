//--------------------------------------TASK 02------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024


/*onditional Tests: Write a series of conditional tests. Print a statement describing each test and your 
prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */
let car = 'subaru';

// Test 1: Is car equal to 'subaru'?
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Expected output: true

// Test 2: Is car equal to 'honda'?
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // Expected output: false

// Test 3: Is car not equal to 'toyota'?
console.log("Is car != 'toyota'? I predict True.");
console.log(car != 'toyota'); // Expected output: true

// Test 4: Is car length greater than 5?
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5); // Expected output: false

// Test 5: Is car length less than or equal to 7?
console.log("Is car.length <= 7? I predict True.");
console.log(car.length <= 7); // Expected output: true

// Test 6: Is car uppercase equal to 'SUBARU'?
console.log("Is car.toUpperCase() == 'SUBARU'? I predict True.");
console.log(car.toUpperCase() == 'SUBARU'); // Expected output: true

// Test 7: Is car lowercase equal to 'subaru'?
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // Expected output: true

// Test 8: Is car starts with 'su'?
console.log("Does car start with 'su'? I predict True.");
console.log(car.startsWith('su')); // Expected output: true

// Test 9: Is car ends with 'ru'?
console.log("Does car end with 'ru'? I predict True.");
console.log(car.endsWith('ru')); // Expected output: true

// Test 10: Is car includes 'bar'?
console.log("Does car include 'bar'? I predict True.");
console.log(car.includes('bar')); // Expected output: true
