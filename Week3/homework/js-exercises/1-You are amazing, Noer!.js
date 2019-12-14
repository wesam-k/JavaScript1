'use strict'

function giveCompliment(myName){

    const compliment =['great', 'awesome','imposing','wonderful','striking','strong',
    'tremendous','considerable','heroic','major'];
    
    let rand = Math.floor(Math.random()*compliment.length);
          return `you are ${compliment[rand]}  ${myName}`;
  

      
}
console.log(giveCompliment('wesam!'));
console.log(giveCompliment('wesam!'));
console.log(giveCompliment('wesam!'));
