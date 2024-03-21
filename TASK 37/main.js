//----------------------TASK 37--------------------
//SUBMIT BY: SABAHAT ATTA
//DATE: 15 MARCH 2024
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I
love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
// Define a function called make_shirt
function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("Shirt size: ".concat(size, ", Message: ").concat(message));
}
// Call the function to create shirts
make_shirt();
make_shirt('medium');
make_shirt('small', 'Custom message');
