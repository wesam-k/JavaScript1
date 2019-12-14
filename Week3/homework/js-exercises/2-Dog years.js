'use strict'

let calculateDogAge = function(puppyAge){
   const dog = 7 *puppyAge;
   const CALCULATED_VALUE = dog.toFixed(0);                                       
   return `"Your doggie is ${[CALCULATED_VALUE]} years old in dog years!"`;

}
console.log(calculateDogAge(2));
console.log(calculateDogAge(7));
console.log(calculateDogAge(12));

