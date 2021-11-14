"use strict";

console.log("function exercises:");
//Functions using conditionals but not loops or arrays:

//   //  Make a function named isOdd(number)
function isOdd(number){
    return number % 3 === 0;
}
console.log(isOdd(2));

// Make a function named isEven(number)
function isEven(number){
    return number % 2 === 0;
}
console.log(isEven(2));


// Make a function named identity(input) that returns the input exactly as provided.
function identify(input){
    return input;
}
console.log(identify(2));


//     Make a function named isFive(input)
function isFive(input){
   if (input === 5){
       return true;
   }
}
console.log(isFive(5));

// Make a function named addFive(input) that adds five to some input.
function addFive(input){
    return  parseInt(input + 5);
}
console.log(addFive(2));


//     Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input){
    if(  input % 5 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isMultipleOfFive(5));


// Make a function named isThree(input)
function isThree(input){
    if(input === 3){
        return true;
    }
}
console.log(isThree(3));

// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input){
   if(input % 3 === 0){
       return true;
   }else{
       return false;
   }
}
console.log(isMultipleOfThree(2));

// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input){
    if (input % 3 === 0 && input % 5 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isMultipleOfThreeAndFive(15));


// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n){
    if  (target % n === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isMultipleOf(15, 2));


// Make a function named isTrue(boolean)
function isTrue(boolean){
 if ( boolean === true){
     return true;
 }else{
     return false;
 }

}
console.log(isTrue(true));

// Make a function named isFalse(boolean)
function isFalse(boolean){
    if (boolean === false){
        return true;
    }else{
        return false;
    }
}
console.log(isFalse(false));

// Make a function named isTruthy(input), remember that values other than true will
// behave like true
function isTruthy(input){
    if (input == 1){
        return true;
    }else{
        return false;
    }
}
console.log(isTruthy(1));

// Make a function named isFalsy(input), remember that values other than false behave like false
function isFalsy(input){
    if (input == 0){
        return true;
    }else{
        return false;
    }
}
console.log(isFalsy(1));

// Make a function named isVowel(letter)
function isVowel(letter){
    if ( letter === 'a'|| letter ==='A'|| letter ==='e'||letter ==='E'|| letter ==='I'|| letter ==='i'||letter ==='o'|| letter ==='O'|| letter ==='u'|| letter ==="u"){
        return true;
    }else{
        return false;
    }
}

console.log(isVowel("A"));
// Make a function named isConsonant(letter)
function isConsonant(letter){
    if ( letter === 'a'|| letter ==='A'|| letter ==='e'||letter ==='E'|| letter ==='I'|| letter ==='i'||letter ==='o'|| letter ==='O'|| letter ==='u'|| letter ==="u"){
        return false;
    }else{
        return true;
    }
}
console.log(isConsonant("a"))


// Make a function named isCapital(letter)
function isCapital(letter){
    if (letter === letter.toUpperCase()){
        return true;
    }else{
        return false;
    }
}
console.log(isCapital("a"))


// Make a function named isLowerCase(letter)
function isLowerCase(letter){
    if (letter === letter.toLowerCase()){
        return true;
    }else{
        return false;
    }
}
console.log(isLowerCase("A"))


// Make a function named hasLowerCase(string) that returns if a string has
// any lower cased letter
function hasLowerCase(string){
    return string.toUpperCase() !== string;
}
console.log(hasLowerCase("CAT sad DAD"));


// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace(letter){
    return letter.indexOf(' ') >=0;
}
console.log(isSpace("No"))



// Make a function named isZero(number)
function isZero(input){
    if(  input === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isZero(0));

// Make a function named notZero(input) that returns true if the input is not zero
function notZero(input){
    if(  input !== 0){
        return true;
    }else{
        return false;
    }
}
console.log(notZero(2));


// Write a function named lowerCase(string)

console.log(("missing this exercise is confusing"))


// Write a function named double(n) that returns a number times two
function double(n){
    return (n * 2);
}
console.log(double(3));


// Write a function named triple(n) that returns a number times 3
function triple(n){
    return (n *3);
}
console.log(triple(3));


// Write a function named quadruple(n) that returns a number times 4
function quadruple(n){
    return (n *4);
}
console.log(quadruple(2))


// Write a function named half(n) that returns 1/2 of the provided input
function half(n){
    return (n/2);
}

console.log(half(2))


// Write a function named subtract(a, b) that returns a minus b
function subtract(a,b){
    return (a - b);
}
console.log(subtract(4, 2))

// Write a function named multiply(a, b) that returns the product of a times b
function multyply(a,b){
    return (a*b);
}
console.log(multyply(3,2))

// Write a function named divide(a, b) that returns a divided by b
function divide(a,b) {
    return (a / b);
}
console.log(divide(4,2))

// Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainder(a, b){
    return (a % b);
}
console.log(remainder(5 ,2))




// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
function modulo(a, b){
    return (a%b);
}
console.log(modulo(6 , 4))

// Write a function named cube(n) that returns n * n * n
function cube(n){
    return (n *n *n);
}

console.log(cube(2))


// Write a function named squareRoot(n) that returns the square root of the input
function squaredRoot(n){
    return Math.sqrt(n);
}
console.log(squaredRoot(2))

// Write a function named cubeRoot(n) that returns the cube root of the input
function cubeRoot(n){
    return Math.cbrt(n);
}
console.log(cubeRoot(2))
// Write a function named invertSign(number) that returns a negative version of a postive number,
// a positve version of negative, and false for all else.
function invertSign(number){
    return -Math.abs(number);
}
console.log(invertSign(9))

// Write a function named degreesToRadians(number)
function degreesToRadians(number){
    return number * (Math.PI/180);
}
console.log(degreesToRadians(45))

// Write a function named radiansToDegrees(number)
function radiansToDegrees(number){
    return number * (180/Math.PI);
}
console.log(radiansToDegrees(45))
// Make a function named isBlank(input) that determines if a given input is spaces, newline
// characters, or tabs.
function isBlank(input){
return input.indexOf(' ') >=0;// will return false if no space or true if space
}
console.log(isBlank("cat dog"))
//     Make a function named trim(string) that removes empty spaces before and after the input.
function trim(string){
return string.trim();
}

console.log(trim("      string"));

//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value

function areEqual(input1, input2){
return (input1 == input2);
}

console.log(areEqual("cat", "0"))
// Make a function named areIdentical(input1, input2) that returns if both inputs are same value
// and data type.

function areIdentical(input1, input2){
    return (input1 === input2);
}
console.log(areIdentical("cat", "cat"))
//     Make a function named not(input) returns the input with a flipped boolean
function not(input){
return !input;
}

console.log(not(0))


// Make a function named notNot(input) that the negation of the negation of the input.
function notNot(input){
    return !(!input);
}
console.log(notNot(1))



//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
function and(predicate1,predicate2){
//confusing
    return (predicate1 && predicate2);
}
console.log(and(1,1))




// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
function or(predicate1,predicate2){
return (predicate1 || predicate2);
}

// Write a function called reverseString(string) that reverses a string
function reverseString(string){
return string.split('').reverse().join('');
}
console.log(reverseString("papalote"));


// Make a function named absoluteValue(number) that returns the absolute value of a number.
function absoluteValue(number){
    return Math.abs(number)
}
console.log(absoluteValue(-3));


//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have.
//     Generate a random number between 1 up to and including the number of sides.
function rollDice(sides){
    return Math.floor(Math.random(5) * 6);
}
console.log(rollDice(6));