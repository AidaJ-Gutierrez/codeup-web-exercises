"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var color = "";

function analyzeColor(color){

    if (color === "blue"){
        return "blue is the color of the sky";
    } else if (color === "red"){
        return "Strawberries are red";
    }else if (color === "cyan"){
        return "I don't know anything about cyan";
    }else{
        return "Nothing to say about that color";
    }
}


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor);
//console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
switch (randomColor){
    case "blue":
        return "blah"
        break;

    case "red":
        return "blah"
        break;
    case "cyan":
        return "foo"
        break;

    default:
        return "foobar"
        break;
}


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


var color= prompt("Please, enter a color!")

function analyzeColor(color){

    if (color === "blue"){
        alert  ("Blue is the color of the sky");
    } else if (color === "red"){
        alert ("Strawberries are red");
    }else if (color === "cyan"){
        alert ("I don't know anything about cyan");
    }else{
        alert ("Nothing to say about that color");
    }
}

 console.log(analyzeColor(color));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var number = Math.floor((Math.random() * 5) + 1);
var totalAmount = parseFloat(prompt("Your total amount is $"))

function calculateTotal (number, totalAmount){
    if (number === 0){
        return "Sorry, You did not get a discount! You still have to pay $" + totalAmount.toFixed(2)
    }else if (number === 1 ){
        return "You got 10% discount!, Your new total is $" + (totalAmount - (0.10 * totalAmount.toFixed(2))) + " ."
    }else if (number === 2){
        return "Great! You got 25% discount!" + (totalAmount - (0.25 * totalAmount.toFixed(2))) + " ."
    }else if (number === 3){
      return "Wow,You got 35% discount!" + (totalAmount -(0.35 * totalAmount.toFixed(2))) + " ."
    } else if (number === 4) {
        return "Amazing! You got 50% discount!" + (totalAmount -(0.50 * totalAmount.toFixed(2))) + " ."
    }else if (number === 5){
        return "You are a very lucky person, your total is $" + 0 + " . You are getting all for free!"
    }

}
console.log(calculateTotal(2, 100));

alert (calculateTotal(number, totalAmount));



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6


 var luckyNumber = Math.floor(Math.random() * 6) + 1;
alert("Your lucky number was." + luckyNumber )


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function numberPicked(userNumber) {
    var wantNumber = confirm("Would you like to enter a number? ");

    if (wantNumber === true){
        var userNumber = parseFloat( prompt( "What number would you like to enter?"));
        if (userNumber % 2 === 0){
            alert ("This number is even");
        }else {
            alert("this number is odd");
        }
        alert("Your number plus 100 is : " + (userNumber + 100 ));

        if (userNumber > 0 ){
            alert(" This number is positive.");
        }else if (userNumber < 0){
            alert("This number is negative.");
        }

    }else{
        alert ( "OK. Maybe next time");
    }
}
console.log(numberPicked());






