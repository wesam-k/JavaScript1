'use strict'

const cartForParty= {
    apple :2.5,
    banana: 1.99,
    chips: 1.29,
    win: 5.78,
    beer: 4
};

function calculateTotalPrice(cartForParty){

    const cartArry = Object.values(cartForParty);


     const sum =cartArry.reduce((accumulator,currentValue) =>{
         return accumulator + currentValue;
     },0);

     console.log(sum);


}    
 calculateTotalPrice();