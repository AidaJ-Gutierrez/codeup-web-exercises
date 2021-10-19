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


  for (r = 1; r<= 10; r++) {
      var number = Math.floor(Math.random() * (200 - 20 + 1) + 20)
      if (number % 2 === 0) {
          console.log(number + " is even ");
      } else {
          console.log(number + " is odd");
      }
  }
// 4. Create a for loop that uses console.log to create the output shown below.
     var n= 9;
     var num="";
    for (var a = 1; a<= n ; a++){
      for (j=0; j< a; j++){
             num += a;
         }
         num += "\n";
     }
     console.log(num);

    // David's version
    // for (var a = 1; a<= 9 ; a+=1){
    //      var num= ";
;   //       for (j=1; j<= a; j+1){
    //              num += a;
    //          }
    //        console.log(num);
    //      }
    //


// 5.Create a for loop that uses console.log to create the output shown below.


    for (var b = 100; b >= 5; b-=5) {

        console.log(b);
    }


})();