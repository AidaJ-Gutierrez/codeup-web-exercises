(function() {
    //1. Create a file named break_and_continue.js in the js directory.
    // 2. Prompt the user for an odd number between 1 and 50. Use a loop
    // and a break statement to continue prompting the user if they enter invalid input.
    // 3. Use a loop and the continue statement to output all the odd numbers between

//      1 and 50, except for the number the user entered.


    while (true) {
        var userOdd = parseFloat(prompt("Please, choose an odd number between 1 and 50"));
        if (userOdd % 2 === 0) {
            alert(" That number is not odd, please enter an odd number.");

        } else {
            break;
        }
    }
    for (var c = 0; c <= 50; c++) {
        if ((c % 2) != 0) {
            if (c == userOdd) {
                console.log("Skip this number");
                continue;
            }
            console.log("'Here is an odd number:" + c);
        }
    }



})();