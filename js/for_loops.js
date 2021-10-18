(function(){

//For Loops
// 1.Create a file named for_loops.js inside the js directory and link it to your loops.html file.
// 2. Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)


    function showMultiplicationTable(num){

        for( var n = 1; n <= 10; n++){
            console.log(num + " x "  + n +" = " + n*num)

        }
    }
    console.log(showMultiplicationTable(7));




// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even.


  for (number = 20; number <= 200; number++) {
      var number = Math.floor(Math.random() * (200 - 20 + 1) + 20)
      if (number % 2 === 0) {
          console.log(number + " is even");
      } else {
          console.log(number + " is odd");
      }
  }
// 4. Create a for loop that uses console.log to create the output shown below.
     var n= 9;
     var num="";
    for (var i = 1; i<= n ; i++){
      for (j=0; j< i; j++){
             num += i;
         }
         num += "\n";
     }
     console.log(num);

// 5.Create a for loop that uses console.log to create the output shown below.


    for (var i = 100; i >= 5; i-=5) {

        console.log(i);
    }


})();