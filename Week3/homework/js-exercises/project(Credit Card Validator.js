'use strict'

function doCreditCardValidator(ccNum){

    let ccNumString =ccNum.toString();

    if ( ccNumString.length !== 16){
      return 'please input 16 digits number';
    }
    
//-------
     
    for( let i =0; i <= ccNumString.length; i++ ){
          
      if (ccNum[i]>= '0' && ccNum[i] <='9'){       
        return 'valid';
        }                                                 // check the input number if  integer
       else{
         return 'your credit number is wrong';
       }
        
    }

  //-----
    let val =0;
    for(let i = 0; i <= ccNumString.length; i++){
        if (parseFloat(ccNumString[i]) === parseFloat(ccNumString[i+1])){
            val ++;
        }
        else{
          return 'your credit number is wrong';
        }
    }

   // ---
    if(ccNumString[ccNumString.length -1] % 2 !== 0){
        return 'your credit number is wrong';  //The final digit must be even
    }
    
   //---
    let sum = 0;
    for (let i =0; i = ccNumString.length; i++){
          sum += Number(ccNumString[i]);
    }

    if (sum <= 16){
      return 'your credit number is wrong'
    }
    
   return 'valid';


}
console.log(doCreditCardValidator('4923321197011112'));  
console.log(doCreditCardValidator('a92332119c011112'));  
console.log(doCreditCardValidator('4444444444444444')); 
console.log(doCreditCardValidator('1111111111111110'));  
console.log(doCreditCardValidator('6666666666666661')); 



