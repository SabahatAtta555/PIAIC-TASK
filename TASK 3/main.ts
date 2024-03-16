//--------------------------------------TASK 03------------------------------------------//
// SUBMIT BY:SABAHAT ATTA//
//DATE:MARCH 15,2024//
/* Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase, and titlecase.*/

let myName: string = "SABAHAT ATTA";
console.log("Lowercase: " +myName.toLowerCase());
console.log("uppercase: "+myName.toUpperCase() );

let words: string[] = myName.split(" ");
let titlecaseName: string=""
for(let i=0;i< words.length;i++){
 titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
};
console.log("Titlecase: "+titlecaseName)