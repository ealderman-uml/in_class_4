var today = new Date();
var hourNow = today.getHours(); // returns and integer in range 0 - 23
var greeting;


if (hourNow >= 0 && hourNow <= 12) {        // (0 <= hourNow <= 12)
    greeting = 'Good morning!';
} else if (hourNow > 12 && hourNow <= 18) { // (12 < hourNow <= 18)
    /* note: the assignment is lacking an exclamation point for this greeting, 
     * so I have subsequently omited it here as well. */
    greeting = 'Good afternoon';
} else if (hourNow > 18 && hourNow <= 23) { // (18 < hourNow <= 23)
    greeting = 'Good evening!';
} else {    // default case
    greeting = 'Welcome,';
}


document.write('<h3>' + greeting + '</h3>');