//--------------------------------------TASK 2s------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024
/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one
 happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program
*/
// Create an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7];
// Try to access an element at an invalid index
var invalidIndex = 10;
try {
    var value = numbers[invalidIndex];
    console.log("Value at index ".concat(invalidIndex, ": ").concat(value));
}
catch (error) {
    console.error("Error: ".concat(error.message));
}
// Correct the error by checking the array length
if (invalidIndex < numbers.length) {
    var correctedValue = numbers[invalidIndex];
    console.log("Corrected value at index ".concat(invalidIndex, ": ").concat(correctedValue));
}
else {
    console.error("Invalid index ".concat(invalidIndex, ". Array length is ").concat(numbers.length, "."));
}
