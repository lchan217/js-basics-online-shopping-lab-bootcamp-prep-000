var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price=Math.floor((Math.random() * 100) + 1);
 var groceriesObject = {itemName: item, itemPrice: price}
 cart.push(groceriesObject);
  return (`${item} has been added to your cart.`)
}

function viewCart() {
  var newArray=[]
if(cart.length===0)
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
