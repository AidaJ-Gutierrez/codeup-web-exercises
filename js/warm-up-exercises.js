(function(){
//Tuesday Oct. 12
//Write the code to include a JavaScript file in an HTML document.
//<script src="js/warm-up.js"></script>


//Wednesday Oct.13
//Write a function that returns the number 7.
//Write a if statement with a condition set to the boolean false.
//Does the condition run?

    function seven (){
        return 7;
        console.log(seven());


        if (false){
            console.log("is false");
        }
    }
// Thursday Oct. 14
    // The following code will set the variable hadBreakfast to a random boolean value.
    // Copy and paste the following code into your warmups JS file:
    //var hadBreakfast = Boolean(Math.round(Math.random()));

//Write a ternary expression to set a variable of hadBreakfastMessage to a string expressing whether or
// not you have had breakfast. You will use the variable hadBreakfast as your condition.

    var hadBreakfast = Boolean(Math.round(Math.random()));
    var breakfastMsg = (hadBreakfast) ? "You had breakfast! Great you are ready to start the day" : "No breakfast? Oh!, you are going to be hungry soon.";


    console.log(breakfastMsg);


// Friday Oct 15.
    //Write a function called 'typeCheck' that takes an input and returns a string of the data type entered.
    // If the data type is a string, return the string "Haha, it's a string of string!"


     function typeCheck (input){
         if (typeof input === "string"){
             return "Haha, it\'s a string of string!";
         }else {
             return typeof input;
         }}
    Tests:
        typeCheck('')
    typeCheck(isNaN());
    typeCheck(!false * 3);
    typeCheck(4 + '4');

// Monday Oct.18

    //- When writing code to test our test in TDD it's important to put yourself in the mindset of a (junior/senior**)
    // web developer. This will help you in ensuring that our test our test are fully comprehensive.
    // - When writing code with test provided to me, it's important for me to write code:
    // A. With minimal effectiveness so as to green all the test.
    // B. With full functionality so as to ensure my function works as intended.
    // C. Both. ***


// Tuesday Oct. 19
// -Write a program that console.logs the number from 1 to 100. But for multiples of three
    // console.log "Fizz" instead of the number and for the multiples of five console.log "Buzz.
   // For numbers which are multiples of both three and five console.log "FizzBuzz."

    var output = [];
    var count = 1;

    function fizzBuzz(){
        while( count <=100){
           if (count % 3 ===0 && count % 5 === 0){
               output.push("FizzBuzz");
           }else if (count % 3 === 0) {
               output.push("Fizz");
           } else if(count % 5 === 0){
               output.push("Buzz");
           }else{
               output.push(count);
           }
           count++;
        }
        console.log(output);
    }

    console.log(fizzBuzz());



//    for loop version

 // for(var count=1; count <= 100; count++){
 //    if (count % 3 ===0 && count % 5 === 0){
 //        output.push("FizzBuzz");
 //    }else if (count % 3 === 0) {
 //        output.push("Fizz");
 //    } else if(count % 5 === 0){
 //        output.push("Buzz");
 //    }else{
 //        output.push(count);
 //    }

//Wednesday Oct. 20


//-Create a function named secondToLast
// tha accepts an array as an  argument and will retturn
// te econd to last elementof te array.

function secondToLast(array){
    return array [array.length -2];
}

console.log(secondToLast(["first","second","not last", "last"]));
})();
