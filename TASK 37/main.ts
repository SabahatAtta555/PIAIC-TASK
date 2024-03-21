//----------------------TASK 37--------------------
//SUBMIT BY: SABAHAT ATTA
//DATE: 15 MARCH 2024
/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I 
love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. */
// Define a function called make_shirt
function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`Shirt size: ${size}, Message: ${message}`);
}

// Call the function to create shirts
make_shirt();
make_shirt('medium');
make_shirt('small', 'Custom message'); 
