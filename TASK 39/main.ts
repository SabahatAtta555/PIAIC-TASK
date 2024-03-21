//--------------------------------------TASK 39------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024
/*City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */
// Define a function called city_country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the function with city-country pairs
const city1 = city_country('Lahore', 'Pakistan');
const city2 = city_country('newyork', 'USA');
const city3 = city_country('Tokyo', 'Japan');

// Print the values returned
console.log(city1);
console.log(city2);
console.log(city3);
