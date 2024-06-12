/* Ed Alderman
 * This script adjusts the welcome message on the page,
 * and dynamically sets the pricing fields.
 */

// Create variables for the welcome message
var greet = 'Hello ';
var name = 'Molly';
var message = ', please check your order:';
// Concatenate the three variables above to create the welcome message
var welcome =  greet + name + message;

// Create variables to hold details about the sign
var sign = 'Welcome Home';
var tiles = sign.length;    // includes whitespace
var subTotal = tiles * 5;   // $5 for each tile
var shipping = 7;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
var greetingDiv = document.getElementById('greeting');

// Replace the content of that element with the personalized welcome message
greetingDiv.textContent = welcome;

// Get the element that has an id of userSign then update its contents
var userSignTd = document.getElementById('userSign');
userSignTd.textContent = sign;

// Get the element that has an id of tiles then update its contents
var tilesTd = document.getElementById('tiles');
tilesTd.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var subtotalTd = document.getElementById('subTotal');
subtotalTd.textContent = '$' + subTotal;

// Get the element that has an id of shipping then update its contents
var shippingTd = document.getElementById('shipping');
shippingTd.textContent = '$' + shipping;

// Get the element that has an id of grandTotal then update its contents
var grandTotalTd = document.getElementById('grandTotal');
grandTotalTd.textContent = '$' + grandTotal;
