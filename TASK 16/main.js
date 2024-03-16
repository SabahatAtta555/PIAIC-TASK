//--------------------------------------TASK 16------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024
/*More Guests: You just found a bigger dinner table,
 so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
 that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list. */
var guestList = [
    "Wishal",
    "Baber",
    "Ahsan"
];
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("hello " + guest + " ,we found a bigger dinner table");
}
var newGuestatBeginning = "Ali";
guestList.unshift(newGuestatBeginning);
//console.log(guestList)
var newGuestInMiddle = "Mahir";
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
//console.log(guestList)
var newGuestAtEnd = "Talah";
guestList.push(newGuestAtEnd);
console.log(guestList);
