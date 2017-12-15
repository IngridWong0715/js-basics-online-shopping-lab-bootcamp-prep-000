var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push( {[item] : Math.floor(Math.random() * 100 )+ 1 } );
 console.log (`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {

  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  } else if (cart.length === 1){

var key = Object.keys(cart[0])[0];
var value = cart[0][key]
console.log(`In your cart, you have ${key} at $${value}.`);
  } else if (cart.length === 2){
    var keys = [ Object.keys(cart[0])[0], Object.keys(cart[1])[0] ];
var value1 = cart[0][keys[0]];

console.log(`In your cart, you have ${keys[0]} at $${cart[0][keys[0]]} and ${keys[1]} at $${cart[1][keys[1]]}.`);

  } else {
    var keys = [];
for (var i = 0; i< cart.length; i++){
  keys.push( Object.keys(cart[i])[0]);
}

//var keys = [ Object.keys(cart[0])[0], Object.keys(cart[1])[0],Object.keys(cart[2])[0]  ];
console.log(keys);
var outputString = "In your cart, you have ";
for (var j = 0; j <cart.length-1; j++){
  outputString += `${keys[j]} at $${cart[j][keys[j]]}, `;
}
outputString += `and ${keys[keys.length-1]} at $${cart[keys.length-1][keys[keys.length-1]]}.`;
console.log(outputString);
  }
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
