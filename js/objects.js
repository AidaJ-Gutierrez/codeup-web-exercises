(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var person = {};
    person.firstName = "Aida";
    person.lastName = " Gutierrez";


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

person.greeting= "Hello from ";


console.log( person.greeting + person.firstName + person.lastName);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    var discount = shoppers.amount - (shoppers.amount * .12);


    shoppers.forEach(function (shopper) {
        var discount = shopper.amount - (shopper.amount * .12);
        if (shopper.amount >= 200) {
            console.log("Hey " + shopper.name + " You total is $" + shopper.amount + " You are getting a discount of $"
                + (shopper.amount * .12) + " Your new total is $ " + discount + " !");
        }
        if (shopper.amount < 200) {
            console.log("Hey " + shopper.name + " You total is $" + shopper.amount + ",  Unfortunately you will not get a discount.");
        }
    })


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var firstBook = { title: "The Tinder Box" , author: {  firstName  : "Hans C.", lastName : "Andersen" ,  }};
    var secondBook = {title:"The Selfish Giant", author: {firstName:"Oscar", lastName:"Wilde",}};
    var thirdBook = { title: "Sleeping Beauty", author: {  firstName :"Charles" , lastName :"Perrault" ,  }};
    var fourthBook ={ title: "Goldilocks and The Three Bears", author: {  firstName : "Robert", lastName : "Southey",  }};
    var fifthBook ={ title: "Jack the Giant Killer", author: {  firstName : "Joseph", lastName :"Jacobs" ,  }};

var books =[ firstBook, secondBook, thirdBook, fourthBook, fifthBook];


console.log(books[0].title);
console.log(books[0].author.firstName);
console.log(books[0].author.lastName);



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */


    books.forEach(function( book, index) {

        console.log(book, index);

    });



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook(title, author){
var newBook= {
    title : title,
    author : {
        firstName: "firstName",
        lastName : "lastName",
    }
};
return newBook;
        }

    console.log(createBook("The Bronce Ring", "Andrew Lang" ));


    function showBookInfo(books){
    books.forEach(function( book, index) {

            console.log(book, index);

        });
    }

})();