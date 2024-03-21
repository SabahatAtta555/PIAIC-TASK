//------------------------------TASK 35--------------------
// SUBMIT BY: SABAHAT ATTA
//DATE: MARCH 20,2024
/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these
 animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to 
 print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your 
 program stating what these animals have in common.
 You could print a sentence such as Any of these animals would make a great pet!
*/
// Define an array of animals with a common characteristic
const animals: string[] = ['cow','eagle', 'cat', 'lion','dog'];

// Use a for loop to print the name of each animal
for (const animal of animals) {
    console.log(animal);
}

// Modify the program to print a statement about each animal
for (const animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

// Print a sentence about what these animals have in common
console.log("Any of these animals would make a great pet!");
