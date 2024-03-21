//--------------------------------------TASK 26------------------------------------------//
// SUBMIT BY:SABAHAT ATTA//
//DATE:MARCH 15,2024//

/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/
// Alien Colors #1
const alienColor: string = 'green';

// Check if the alien's color is green
if (alienColor === 'green') {
    console.log("You just earned 5 points!");
}

// Alien Colors #2
const anotherAlienColor: string = 'yellow';

// Check if the alien's color is green
if (anotherAlienColor === 'green') {
    console.log("You just earned 5 points for shooting the alien.");
} else {
    console.log("You just earned 10 points.");
}
