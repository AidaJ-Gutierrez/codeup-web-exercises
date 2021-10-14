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













})();
