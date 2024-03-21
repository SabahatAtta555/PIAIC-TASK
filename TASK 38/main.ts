//----------------------TASK 38--------------------
//SUBMIT BY: SABAHAT ATTA
//DATE: 15 MARCH 2024
/*Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
country a default value.Call your function for three different cities, at least one of which is not in the
 default country. */
 // Define a function called describe_city
function describe_city(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for different cities
describe_city('Karachi', 'Pakistan');
describe_city('Barcelona', 'Spain');
describe_city('Tokyo'); 
