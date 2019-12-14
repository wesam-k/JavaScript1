'use strict'


function addToShoppingCart(grocery){
    let shoppingCard = ['bananas','milk'];

     shoppingCart.push(grocery); 
    
    if (shoppingCard.length > 3 ){
      return `"You bought [${shoppingCard.slice(1,4)}]!"`; // or we can use shopping.shift() 
      
    }else{
        return`"You bought [${shoppingCard}]!"`;

    };
} 
console.log(addToShoppingCart('win'));
console.log(addToShoppingCart('tomato'));
console.log(addToShoppingCart('bread'));




    


