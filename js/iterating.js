

(function (){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names =["Victor", "Ana", "Aaron", "Adan"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

for (var d = 0; d < names.length ; d++){
    console.log("The name of this person is " + names[d]);
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     *
     *
     */
names.forEach(element=> console.log(element));


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    function first(array){
        return array[0];
         }
         console.log(first(names));

    function second(array){
        return array[1];
    }
    console.log(second(names));

    function last(array ){
        return array [array.length -1];
    }
    console.log(last(names));


//Extra exercise:
    //Define a function named allIndexesOf that takes in two arguments.
    // The first argument should be the array to search and the second argument should
    // be the value you want to search for. If the item does not exist in the provided array,
    // return an empty array.

   // Given:

//    var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
    // allIndexesOf(fruits, "apple") should return the array [0, 3]
    // allIndexesOf(fruits, "guava") should return the array []
    // allIndexesOf(fruits, "pineapple") should return [4]
 //var index = fruits.indexOf("");

//function allIndexesOf(fruit,index){
  //      return index;
//}


})();