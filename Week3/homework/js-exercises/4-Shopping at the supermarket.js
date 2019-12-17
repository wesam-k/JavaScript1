'use strict'

const  shoppingCard = ['bananas','milk'];
function addToShoppingCart(grocery){
  
     shoppingCart.push(grocery); 
    
    if (shoppingCard.length > 3 ){
      return shopping.shift(); 
      
    }else{
        return`"You bought [${shoppingCard}]!"`;

    };
} 
console.log(addToShoppingCart('win'));
console.log(addToShoppingCart('tomato'));
console.log(addToShoppingCart('bread'));




    


