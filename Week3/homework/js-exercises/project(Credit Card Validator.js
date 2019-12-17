'use strict'

function doCreditCardValidator(ccNum){

    const  ccNumString =ccNum.toString();

    if ( ccNumString.length !== 16){             //Number must be 16 digits
      return 'please input 16 digits number';
    }
    
//-------
     
 
          
      if (ccNumString %1 !== 0){       
        return 'your credit number is wrong';// check the input number if  integer
        }
                                     
 
 //-----
                                                              
        if (new Set(Array.from(ccNumString)).size < 2){    //  different two digital numbers 

         return 'your credit number is wrong'; 
       }

  //  ---
        if(ccNumString[ccNumString.length -1] % 2 !== 0){    //The final digit must be even
        return 'your credit number is wrong';  
        }
      
  //---
    
     
      if (Array.from(ccNumString).reduce((acc, digit) =>      //The sum of all the digits must be greater than 16
      acc + parseInt(digit, 10), 0) <= 16)
       return 'your credit number is wrong';
       else{
        return 'Valid';
      }    

}
console.log(doCreditCardValidator('9999777788880000'));  
console.log(doCreditCardValidator('6666666666661666'));  
console.log(doCreditCardValidator('a92332119c011112'));  
console.log(doCreditCardValidator('4444444444444444')); 
console.log(doCreditCardValidator('1111111111111110'));  
console.log(doCreditCardValidator('6666666666666661')); 



