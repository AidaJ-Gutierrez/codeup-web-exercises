









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

function allIdexesOf(fruits, val) {
    var indexes = [], i = -1;
    while ((i = fruits.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

var indexes =allIdexesOf(fruits, "apple");




//
// Define a function named removeAll(array, value) that takes in two arguments. The first argument
// should be an array and the second argument should be a value you wish to remove

// Given:
//
    var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// removeAll(bugs, "ant") should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
// removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrences.


function removeAll(bugs, val){
    var removeItem= [];

return bugs;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var filtered = array.filter(function(value, index, arr){
    return value > 5;
});