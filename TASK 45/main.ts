//---------------------TASK 45---------------------
//SUBMIT BY: SABAHAT ATTA
// Date:15 March 2024
/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a
 manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the 
 function with the required information and two other name-value pairs, such as a color or an optional feature.
 Print the Object that’s returned to make sure all the information was stored correctly. */
 // Define a function to store car information
function createCar(manufacturer: string, model: string, ...options: string[]): object {
    const carInfo: object = {
        manufacturer,
        model,
        options
    };
    return carInfo;
}

// Call the function with required information and additional options
const myCar = createCar('Toyota', 'Camry', 'blue', 'sunroof');

// Print the car information
console.log(myCar);
