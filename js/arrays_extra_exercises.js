"use strict";

console.log(" Array with functions and loops:")
// Define a function named allIndexesOf that takes in two arguments. The first argument
// should be the array to search and the second argument should be the value you want to
// search for. If the item does not exist in the provided array, return an empty array.
//
//Given:
//
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
// allIndexesOf(fruits, "apple") should return the array [0, 3]
// allIndexesOf(fruits, "guava") should return the array []
// allIndexesOf(fruits, "pineapple") should return [4]

function allIndexesOf(arr, itemArr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === itemArr) {
            newArr.push(i);
        }
    }
    return newArr
}

        console.log(allIndexesOf(fruits, "apple")); //should return the array [0, 3]
        console.log(allIndexesOf(fruits, "guava")); //should return the array []
        console.log(allIndexesOf(fruits, "pineapple")); //should return [4]


//
// Define a function named removeAll(array, value) that takes in two arguments.
// The first argument should be an array and the second argument should be a value
// you wish to remove
//
// Given:
//
   var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// removeAll(bugs, "ant") should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrances.

function removeAll(arr, value) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
             arr.splice(i,1);
             i--;
        }
    }
    return arr;
}

        console.log(removeAll(bugs, "ant"));//should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
        console.log(removeAll(bugs, "mosquito")); //should return ["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
        console.log(removeAll(bugs, "roach")); //should return the original array b/c "roach" has no occurrences.


//     Make a function called randomIntBetween(min, max) that returns a random number between
//     the min and the max.
function randomIntBetween(min, max){
    return Math.floor(Math.random() *(max -min) + min);
}

        console.log(randomIntBetween(1, 10));
        console.log(randomIntBetween(20, 30));


// //     Make a function called coinFlip() that returns either 0 or 1, randomly
function coinFlip(){
    return Math.floor(Math.random() );
}


        console.log(coinFlip());




// Make a function called twoDice() that returns the sum of rolling two six sided dice.
function twoDice(){
   return  Math.floor(Math.random(5) * 6) + Math.floor(Math.random(5) * 6)
}
console.log(twoDice());

//      Or reuse previous exercise:
//         function twoDice() {
//             return randomIntBetween(1, 7) + randomIntBetween(1, 7);
////         }



//     Make a function called twentySidedDie() that returns a random integer between 1 and 20.

function twentySidedDie(){
    return randomIntBetween(1, 20);
}

         console.log(twentySidedDie());

// Make a function called twelveSidedDie() that returns a random integer between 1 and 12.
function twelveSidedDie(){
    return randomIntBetween(1, 12)
}

      console.log(twelveSidedDie())


// Make a function called tetrahedron() that returns a random integer between 1 and 4.
function tetrahedron() {
    return randomIntBetween(1, 4);
}

     console.log(tetrahedron());


// Make a function called rollDie() that returns an integer between 1 and 6.
function rollDie(){
    return randomIntBetween(1 ,6)
}
    console.log(rollDie());


// (STEP 1:)  Make a function called listOfRolls(num) that takes in a number containing
// how many 6-sided dice rolls you want to make. The listOfRolls function should
// return an array of that length (STEP 2: SHOULD CREATE A NEW EMPTY ARRAY),
// where each element of the array is the result of
// the rollDie function.

function listOfRolls(num){
    var rollsArr=[];
    for (var i = 0; i < num; i++){
        rollsArr.push(rollDie()); //REUSE PREVIOUS CODE
    }
    return rollsArr;
}

         console.log(listOfRolls(11));



// Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction)

// This function should take in two arguments:
//
//     The first argument is the number of rolls you want to make.
//     The second argument is a function that contains the function definition for
//     the type of die you want to roll.
//     For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron),
//     then the function will return an array containing one value that is
//     the result of calling the tetrahedron function.

function listOfRollsFromDieFunc(numberOfRolls, diceFunction){
    var newListOfRolls = [];
     for ( var i = 0; i < numberOfRolls; i++){
         newListOfRolls.push(diceFunction());// Refers to any of the previous dice functions created
     }
     return newListOfRolls;
}

        console.log(listOfRollsFromDieFunc(5, twentySidedDie));

/**
 * JS Array Practice
 * Intermediate Array practice: array creation, iteration, and manipulation
 */

// Exercise 0. Write a function named first() that returns only the first element of an array
var arr= [1,2,3,4];


function first( arr){
    return arr.slice(0,1);
}
console.log(first(arr));

//
//         OR
//         function first(array) {
//             return array[0];
//         }

        //console.log(first([1, 2, 3, 4]));

// // Exercise 1. Write a function named secondToLast() that returns the second to last element
function secondToLast(){
    return arr[arr.length -2];
}
console.log(secondToLast(arr));

//          OR
//         function secondToLast(array) {
//             return array[array.length - 2];
//         }
//
//         console.log(secondToLast([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//
// // Exercise 2. Write a function named rest() that takes an an array and returns an array
//containing everything except the first element.


function rest(arr) {
    var arrNew = [];
    arr.shift()
    arrNew.push(arr);
    return arrNew;
}

        console.log(rest(arr));


// // Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array
//
// var arr = [
//     'first item',
//     'second item is longer than the third one',
//     'third longish item'
// ];

function getLongestString(arr) {
    var maxStr = arr[0].length;
    var ans = arr[0];
    for (var i = 1; i < arr.length; i++) {
        var max = arr[i].length;
        if (max > maxStr) {
            ans = arr[i];
            maxStr = max;
            return ans;
        }
    }
}
console.log(getLongestString(["long", "longer", "longest"]));



// Exercise 3.1 Write a function named getShortestString that takes in an array of strings
// and returns the shortest string in that array.

function getShortestString(arr) {
    var minNum = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
        }
    }
    return minNum;

}

console.log(getShortestString(["long", "longer", "longest"]));


// // Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays.
// The function should return a single array containing all of the elements of the first array
// along with all of the elements of the second array
// // Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]


 function addTwoArrays(arr1, arr2) {
     return arr1.concat(arr2);
 }
 console.log(addTwoArrays([1, 2, 3], [4, 5, 6]));


 // Exercise 5. Write a function named getUniqueValues that takes in an array and returns the
// array without any duplicates
 // Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]

function getUniqueValue(arr) {
    var boxArr = [];
    arr.forEach(function (element) {
        if (!boxArr.includes(element)) {
            boxArr.push(element)
        }
    });
    return boxArr;
}

console.log(getUniqueValue(['a', 'b', 'a', 'b', 'c', 'c']))
// // Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed,
// but without altering the original array.

function reverseArray(arr){
    return arr.reverse();
}
console.log(reverseArray([1,2,3,4]));

// // Exercies 7. Write a function named getRandomQuote().
// //   Inside of the function, create an array of strings where each string is a quote or thought
// you find inspirational; getRandomQuote should generate a random number between 0 and the array's
// length minus 1, use the randomly generated number as your index return a random quote.

var quotes = ["Love For All, Hatred For None", "Every moment is a fresh beginning", "Never regret anything that made you smile", "Yesterday you said tomorrow. Just do it", "Try to be a rainbow in someone???s cloud."]
function getRandomQuote(arr) {

   var indexQuotes = Math.floor(Math.random() * (quotes.length -1));
    for( var i =0; i < quotes.length; i++ ){
        var randomQuote = arr[indexQuotes];
    }return randomQuote;
}
 console.log(getRandomQuote(quotes));


// // Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// // The first argument should be a specific numeral or character
// // The second argument should be any given string
// // getIndexesOf() should return an array containing all of the indexes of that character in the string
// // Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// // Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"

// function getIndexesOf(anyChar,anyStr){
//     var count = [];
//     var position = anyStr.indexOf(anyChar);
//
//     while (position > -1) {
//         count++;
//         position = anyStr.indexOf(anyChar, position + 1);
//     }
//         return count;
// }
//
// console.log(getIndexesOf("i","kexqui xiuitl tikpia?"))
// console.log("!!!!!!this one is no doing what i want!!!!!!")

function getIndexesOf(charStr, anyStr) {
    var countArray = [];
    var i = -1
    while ((i = anyStr.indexOf(charStr, i + 1)) >= 0) {
        countArray.push(i)
    }
    return countArray
}

console.log(getIndexesOf("a", "banana"));
//
// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]
function removeAll(arr, value) {

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}

console.log("this removeAll is a repetition from the one on top")



//Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array
// of the first ten fibonacci numbers
//
//

function firstTenFibonacciaNumbers(n) {
var output =[];
    if (n===1){
        output =[0];
    }else if(n===2){
        output =[0,1]
    }else{
        output =[0,1];
        for (var i=2; i< n; i++){
            output.push(output[output.length - 2] + output[output.length -1]);
        }
    }
    return output;
}
 console.log(firstTenFibonacciaNumbers(10));


// // Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci
// numbers
function getNFibonacci(n) {
    var n1 = 0, n2 = 1;
   var arrFibo = [];
    for (var i = 1; i <= n; i++) {
    arrFibo.push(n1);
    var nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
return arrFibo;
}

console.log(getNFibonacci(20));

//
// // Exercise 12. Write a function named moveFirstToLast() that takes in an array
// // the function should return the array with the first element at the end
// // Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]

function moveFirstToLast(arr) {
    var b = arr.shift()
    arr.push(b)
    return arr;
}

console.log(moveFirstToLast([1, 2, 3, 4, 5]));


// // Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// // Zip returns a new array of arrays where each element is an array of the two elements at the same index
// // Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// // Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]\
function zip(arr1, arr2) {
    var pairArr = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr1.length === arr2.length) {
            pairArr[i] = [arr1[i], arr2[i]];
        }
        return pairArr;
    }
}
console.log("this one is confusing:");
console.log(zip([1, 2, 3], [4, 5, 6]));