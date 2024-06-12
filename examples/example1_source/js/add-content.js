<<<<<<< Updated upstream
//var today = new Date();
//var hourNow = today.getHours();
var greeting;


greeting = 'Welcome!';
=======
/* Ed Alderman
 * This script simply adjusts the greeting on the page
   based on the hour.
 */

var today = new Date();
var hourNow = today.getHours(); // returns and integer in range 0 - 23
var greeting;


if (hourNow >= 0 && hourNow <= 12) {        // (0 <= hourNow <= 12)
    greeting = 'Good morning!';
} else if (hourNow > 12 && hourNow <= 18) { // (12 < hourNow <= 18)
    greeting = 'Good afternoon';
} else if (hourNow > 18 && hourNow <= 23) { // (18 < hourNow <= 23)
    greeting = 'Good evening!';
} else {                                    // default case
    greeting = 'Welcome,';
}

>>>>>>> Stashed changes

document.write('<h3>' + greeting + '</h3>');