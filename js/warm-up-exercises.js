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


//Thursday Oct. 21

// Write a function named 'moveToEnd' that takes in an array, and returns
// the array with the original first index moved to the last index of
// the array.
// example.:moveToEnd([1, 2, 3, 4]) 		  // returns [2, 3, 4, 1];
// moveToEnd(['roll', 'rock', 'and']  // returns ['rock', 'and', 'roll'];
//

arr= [1, 2, 3, 4, 5];
function moveToEnd(arr){

    var first = arr.shift()
    arr.push(first);
return arr;
}

console.log(moveToEnd(arr));

//Monday October 25.
var myPokemon = {
    name: "Rapidash",
    description: "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
    height: {
        feet:5,
        inches: 7
    },
    category: "Fire Horse",
    abilities:{
        one: "Run Away",
        two: "Fash Fire"
    },
    weeknesses: {
        fistsWeakness:"water",
        secondWeakness:"ground",
        ThirdWeakness:"rock"}

};


// Monday October 26
// Create a function that accepts an array as an argument, and that returns and array of objects
//that have a nationality property of "Canadian".
var wrestlers = [
    {
        name: "Bret Hart",
        nationality: "Canadian"
    }, {
        name: "Shawn Michaels",
        nationality: "American"
    }, {
        name: "Christian Cage",
        nationality: "Canadian"
    }, {
        name: "Keiji Mutoh",
        nationality: "Japanese"
    }, {
        name: "Eddy Guerrero",
        nationality: "American"
    }, {
        name: "Owen Hart",
        nationality: "Canadian"
    }


];

function getCanadians(arr){
var bucket = [];
    arr.forEach(function(element){
        if(element.nationality === "Canadian"){
           bucket.push(element);
        }
    })
return bucket;
}
console.log(getCanadians(wrestlers));


//October 27
// find the area of the circle, and round it to the nearest whole number using Math object.

var circle={
    radius: 36,

    }
var area = Math.round(Math.PI * Math.pow(circle.radius,2));


console.log(area);

//November 2
//Create a function that takes in an array of objects,
// and returns the object with the highest quantity property.

var groceries = [
    {
        name: "carrots",
        quantity: 5
    },{
        name: "yams",
        quantity: 50
    },{
        name: "oranges",
        quantity: 9
    },{
        name: "onions",
        quantity: 2
    },{
        name: "cucumbers",
        quantity: 6
    },{
        name: "potatoes",
        quantity: 8
    }
];
function giveMeHighQuantity(arr){
    var obj = {
        name: "",
        quantity: 0
    }
    arr.forEach(function (el)){
        if( el.quantity > obj.quantity) {
            obj = el;
     }
        return obj;
    }











})();




