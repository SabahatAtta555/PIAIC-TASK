//--------------------------------------TASK 32------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024
/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should
have one parameter that collects as many items as the function call provides, and it should print a summary of
 the sandwich that is being ordered. Call the function three times, using a different number of arguments
 each time.
*/
// Define a function to create a sandwich
function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    if (ingredients.length === 0) {
        console.log("You forgot to add any ingredients. Your sandwich is empty!");
    }
    else {
        console.log("Your sandwich includes: " + ingredients.join(", "));
    }
}
// Call the function with different ingredients
makeSandwich("Bread", "tomato", "cheese");
makeSandwich("chiken piece", "mayo", "pickles", "onion");
makeSandwich();
