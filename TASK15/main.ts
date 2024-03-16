//--------------------------------------TASK 15------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024



/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list. */
let guestList: Array<string> = [
    
    "Wishal",
    "Baber",
    "Ahsan"
]; 
let guestwhoCantMakeIt: string="Baber"
console.log(guestwhoCantMakeIt+" Can't make it to Dinner")
 let NewGuest: string ="Daniyal"
 var indexOfGuestwhoCantMakeIt: number= guestList.indexOf(guestwhoCantMakeIt)

if (indexOfGuestwhoCantMakeIt!==-1)
{
    guestList[indexOfGuestwhoCantMakeIt] = NewGuest
}

console.log("Second set of invitation messages: ")
guestList.forEach((Guest :string) =>
{
    console.log("Dear "+Guest+" you are invited for dinner")
}
)
export{guestList}