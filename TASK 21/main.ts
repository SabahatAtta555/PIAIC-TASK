//--------------------------------------TASK 21------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024
/*
They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.
*/
interface Item {
    name: string;
    category: string;
}

// Create some sample items
const Mobile: Item = { name: "Mobile", category: "Electronics" };
const book: Item = { name: "Novel", category: "Literature" };
const ring: Item = { name: "Ring", category: "Jewellery" };
const Ball: Item = { name: " Ball", category: "Sports" };

// Create an object to store the items
const itemStorage = {
    electronics: [Mobile],
    literature: [book],
    jewellery: [ring],
    sports: [Ball],
};

// Print the items
for (const category in itemStorage) {
    console.log(`Category: ${category}`);
    itemStorage[category].forEach((item) => {
        console.log(`- ${item.name}`);
    });
}