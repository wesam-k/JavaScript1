'use strict'

const calculateDogAge = function(puppyAge){
   const dog = 7 *puppyAge;
   const calculatedValue = dog.toFixed(0);                                       
   return `"Your doggie is ${calculatedValue} years old in dog years!"`;

}
console.log(calculateDogAge(2));
console.log(calculateDogAge(7));
console.log(calculateDogAge(12));

