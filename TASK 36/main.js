//----------------------TASK 36------------------------------------
//SUBMIT BY: SABAHAT ATTA
/*
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be
printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message
printed on it. Call the function.

 */
// Define a function called make_shirt
function make_shirt(size, message) {
    console.log("Shirt size: ".concat(size, ", Message: ").concat(message));
}
// Call the function with different sizes and messages
make_shirt('large', 'I love TypeScript'); // Large shirt with custom message
make_shirt('medium', 'Hello, World!'); // Medium shirt with custom message
make_shirt('small', 'Code is poetry'); // Small shirt with custom message
