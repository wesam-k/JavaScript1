'usr strict'

function calculateTotalPrice(cartForParty){

    
      cartForParty= {
        apple :2.5,
        banana: 1.99,
        chips: 1.29,
        win: 5.78,
        beer: 4
    };


    cartArry = Object.values(cartForParty);


     const sum =cartArry.reduce((accumulator,currentValue) =>{
         return accumulator + currentValue;
     },0);

     console.log(sum);


}    
 calculateTotalPrice();