// Create some sample items
var Mobile = { name: "Mobile", category: "Electronics" };
var book = { name: "Novel", category: "Literature" };
var ring = { name: "Ring", category: "Jewellery" };
var Ball = { name: " Ball", category: "Sports" };
// Create an object to store the items
var itemStorage = {
    electronics: [Mobile],
    literature: [book],
    jewellery: [ring],
    sports: [Ball],
};
// Print the items
for (var category in itemStorage) {
    console.log("Category: ".concat(category));
    itemStorage[category].forEach(function (item) {
        console.log("- ".concat(item.name));
    });
}
