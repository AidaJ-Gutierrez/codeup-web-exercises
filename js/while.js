(function(){
//1. Create a file named while.js in the js directory.
//
//2.  Create a while loop that uses console.log() to create the output shown below.
i = 2;
    while (i <= 65536) {
        console.log(i);
        i *= 2;
    }

// Do While Loop
// An ice cream seller can't go home until she sells all of her cones.
// First write enough code that generates a random number between 50 and 100
// representing the amount of cones to sell before you start your loop.
// Inside of the loop your code should generate another random number
// between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold
// to each person. This is a way get the random numbers for this exercise.

    var conesToSell = Math.floor(Math.random() * (100 - 50 + 1) + 50);
        do {
            var conesBoughtByCostumers = Math.floor(Math.random() * (5 - 1+ 1) + 1);
            console.log(conesBoughtByCostumers);
            conesBoughtByCostumers --;
        }while (conesToSell > 50);


    console.log();













})();