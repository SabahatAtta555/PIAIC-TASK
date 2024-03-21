//--------------------------------------TASK 31------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024
/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/
// Create an array of usernames
var users = ['Amna', 'sabiya', 'fariha'];
// Check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Remove all usernames from the array
    users.length = 0;
    console.log("All usernames have been removed.");
}
