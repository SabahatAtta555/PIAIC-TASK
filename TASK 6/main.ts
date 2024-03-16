//--------------------------------------TASK 06------------------------------------------//
// SUBMIT BY:SABAHAT ATTA//
//DATE:MARCH 15,2024//
/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
 */
let personName: String = "\t\nAlbert\t Einstein\n";
 console.log("name with whitespace"+ personName);
 let strippedName: String= personName.trim();
 console.log('Stripped Name:\t '+ strippedName);