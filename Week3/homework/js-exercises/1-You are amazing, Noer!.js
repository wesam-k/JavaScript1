'use strict'

function giveCompliment(myName){

    const compliments =['great', 'awesome','imposing','wonderful','striking','strong',
    'tremendous','considerable','heroic','major'];
    
    let rand = Math.floor(Math.random()*compliments.length);
          return `you are ${compliments[rand]}  ${myName}`;
  

      
}
console.log(giveCompliment('wesam!'));
console.log(giveCompliment('wesam!'));
console.log(giveCompliment('wesam!'));
