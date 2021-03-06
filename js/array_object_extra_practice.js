"use strict";
// 1.
// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.
//     Example input: ["fred", true, 5, 3] Example output: [3, 5]

// function filterNumbers(array){
//     var onlyNumber=[];
//     if (typeof (obj) === 'number') {
//         onlyNumber.push(obj)
//     } else {
//         return false;
//     }
// }
function filterNumbers(arr){
    function filterNumbers(arr) {
        arr.sort();
        return arr.filter(Number.isInteger);
    }
console.log(filterNumbers(["fred", true, 5, 3]));

// 2.Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.
// Example input:
   var dogInfo= [
        {
            name: "Chompers",
            breed: "Pug",
            age: 7
        },
        {
            name: "Freddy",
            breed: "Lab",
            age: 4
        },
        {
            name: "Mr. Pig",
            breed: "Mastif",
            age: 10
        }
    ]
// Example output
//
//     [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//         {
//             name: "Freddy",
//             breed: "Lab",
//             age: 5
//         },
//         {
//             name: "Mr. Pig",
//             breed: "Mastif",
//             age: 11
//         }
//     ]

function getOlder(arry){
    var newAge=[];
    for (var i=0; i < arry.length; i++){
        newAge.push(arry[i].age + 1)
    }
    return newAge;
}

console.log(getOlder(dogInfo));
   //function getOlder(arr) {
//     var newObj = {
//         name: "name",
//         breed: "breed",
//         age: 0
//     }
//     arr.forEach(function (a) {
//         a.age++;
//         newObj = a;
//         console.log(newObj)
//     });
//     return newObj;
// }
//
// getOlder(dogs);

// 3. Write a function, washCars() that takes in a array of car objects
// and sets the boolean properties of isDirty to false.
// Example input:
//
    var cars =[
        {
            make: 'Volvo',
            color: 'red',
            year: 1996,
            isDirty: true
        },
        {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false
        },
        {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
        }
    ]
// Example output
//
//     [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: false // changed to false
//     },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false // stays the same
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: false // changed to false
//         }
//     ]
    function washCars(arr){
        function washCars(arr) {
            var obj = [{
                make:"string",
                color:"string",
                year:0,
                isDirty:"boolean",

            }]
            arr.forEach(function (a){
                arr.forEach(function (a) {
                    a.isDirty = false;
                    obj = a;
                    console.log(obj);
                })
                return obj;
            })

            washCars(cars);

// 4. Write a function, adminList() that takes in an array of user objects and returns a count of all
// admins based on the isAdmin property. Refactor to return an array of admin-only user emails.
//     Refactor again to return an array of user objects that are admins.
//
//     Example Input:

  var users=  [
        {
            isAdmin: true,
            email: 'user1@email.com'
        },
        {
            isAdmin: true,
            email: 'user2@email.com'
        },
        {
            isAdmin: false,
            email: 'user3@email.com'
        }
    ]
// Example Output (before refactor): 2
//
// Example Output (after 1st refactor):
//
// [
//     'user1@email.com',
//     'user2@email.com'
// ]
// Example Output (after 2nd refactor):
//
// [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]
            //FIRST REFACTOR
// function adminList(arrUser){
//     var adminArr = []
//     var adminArr = [];
//     arrUser.forEach(function (c){
//         if(c.isAdmin === true){
//             adminArr.push(c.email);
//         }
//     }); return adminArr
//     }); return adminArr;
// }
// console.log(adminList(users));
//SECOND REFACTOR
            function adminList(arrUser) {
                var adminArr = [];
                arrUser.forEach(function (d) {
                    if (d.isAdmin === true) {
                        adminArr.push(d);
                    }
                });
                return adminArr;

            }

            console.log(adminList(users));
//
// 5.Create a function, makeSandwhichObjects() that takes in two array of strings,
//     breads and fillings and returns an array of sandwhichObjects that contain
// properties for bread and filling and values correspond to the same order
// of the two passed in arrays. Assume the two array inputs are the same length.
//
//     Example Input:

    var breads  = [
        "white",
        "wheat",
        "rhy",
        "white"
    ];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];
//
// makeSandwhichObjects(breads, fillings)
// Example Output:
//
//     [
//         {
//             bread: "white,
//             filling: "pb&j"
//         },
//         {
//             bread: "wheat",
//             filling: "ham"
//         },
//         {
//             bread: "rhy",
//             filling: "cheese steak"
//         },
//         {
//             bread: "white",
//             filling: "tuna"
//         }
//     ]
function makeSandwichObjects(arr1, arr2) {
                var sammich = [];
                for (var i = 0; i < arr1.length; i++) {
                    if (arr1.length === arr2.length) {
                        sammich[i] = [arr1[i], arr2[i]];
                    }
                }
                return sammich;
            };

            console.log(makeSandwichObjects(breads,fillings));}}