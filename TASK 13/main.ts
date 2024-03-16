//--------------------------------------TASK 13------------------------------------------//
// SUBMIT BY:SABAHAT ATTA
//DATE:MARCH 15,2024
/*Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores several examples. Use your list to
 print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */
 let  favoriteTransportation: Array<[transport: string, brand: string]>= []
  favoriteTransportation.push(["motercycle","Honda"])
   favoriteTransportation.push(["bicycle","Sohrab"])
   favoriteTransportation.push(["car","Toyota"])
   favoriteTransportation.forEach(([transport,brand]) =>
   {
    console.log("I would liked to own a " + transport+ " of " + brand+"  Brand.")
   }
   )