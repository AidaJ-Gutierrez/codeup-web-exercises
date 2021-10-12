//create a function which takes in two
// number parameters to find the hypotenuse angle

//Parameters are the placeholders stated in the function definition.
function findHypotenuse(a, b){
    var result;
    result = Math.sqrt((a*a) + (b*b));
    return result;
}
// Have a triangle with the sides of 4 and 5.
// Execute our function to find the hypotenuse.
// Arguments are the values that are put into the function when executed.

console.log(findHypotenuse(4,5));



// FUNCTION SCOPE.
// Scope is a term to describe where a variable can be accessed.
// With Global variable that exixt in the HTML  document,
//I can console.log its value.
console.log(global);


function ggreetings(){
    var firstName ="David";
    var lastName = "Stephens";
    return "Hello. " + firstName + " " + lastName;
}
console.log(ggreetings());
console.log(firstName, lastName);


// Immediately Invole Function Expression (IIFE).

// Syntax:

(function (){
     var  iifeVar = "I am local to the IIFE" ;
})();




