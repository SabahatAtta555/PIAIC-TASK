//--------------------------------------TASK 14------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024
/*Guest List: If you could invite anyone, living or deceased, to dinner,
who would you invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
var guestList = [
    "Wishal",
    "Baber",
    "Ahsan"
];
guestList.forEach(function (guestName) {
    return console.log("Dear  " + guestName + ", You are invited for dinner Please join us.");
});
