

"use strict";







// Arrays
//
// Define a function named allIndexesOf that takes in two arguments.
// The first argument should be the array to search and the second argument should
// be the value you want to search for. If the item does not exist in the provided array,
// return an empty array.
//
// Given:


// allIndexesOf(fruits, "apple") should return the array [0, 3]
// allIndexesOf(fruits, "guava") should return the array []
// allIndexesOf(fruits, "pineapple") should return [4]


    var fruits = ["apple", "banana", "orange", "apple", "pineapple"];

function allIndexesOf(arr, val){

        for (var b = 0; b <= arr.length; b++) {
            if (arr[b] === val) {
                (arr.indexOf(val), 1);
            }}
    return arr.indexOf[b];

}
console.log(allIndexesOf(fruits,"apple"));



``
//
// Define a function named removeAll(array, value) that takes in two arguments. The first argument
// should be an array and the second argument should be a value you wish to remove

// Given:
//
    var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// removeAll(bugs, "ant") should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrences.


function removeAll(arr, val) {
    for (var b = 0; b <= arr.length; b++) {
        if (arr[b] == val) {
            (arr.splice(arr.indexOf[b]), 1);
        }
    }
}
removeAll(bugs,"ant");