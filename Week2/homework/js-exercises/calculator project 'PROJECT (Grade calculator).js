
'use strict'

  


function percentage(score){
  
  
 if(score >= 90 ){      //if the score between 90% to 100% the return a value is A
   return `You got a A (${score}%)!`;   
 }
 if(score >= 80  ){
  return(`You got a B (${score}%)!`); 
 }
  if(score >= 70 ){
  return(`You got a C (${score}%)!`);
 }
  if(score >= 60 ){
  return(`You got a D (${score}%)!`);
 }
  if(score >= 50){
  return(`You got a E (${score}%)!`);
 }
  if(score >= 0 ){
  return(`You got a F (${score}%)!`);
 }
 else {
  return(`You got a X(${score}%)!`); // if the score not under 100 or - number 
 }
}

console.log(percentage(60)); //  you change this value to get another output


