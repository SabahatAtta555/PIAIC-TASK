//--------------------------------------TASK 17------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
 only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a
name from your list, print a message to that person letting them know you’re sorry you can’t invite them to
dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you
actually have an empty list at the end of your program. */
var guestList = [
    'Ali', 'Wishal', 'Mahir', 'Baber', 'Ahsan', 'Talah'
];
console.log("I can invite only two people for dinner");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("sorry, " + removeGuest + "  I can't invit you for dinner");
}
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("Hello, " + guest + " you are still invited for dinner.");
}
console.log("Guest list after dinner  " + guestList);
