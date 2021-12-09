const myPromise= new Promise((fulfill, reject) => {
    if (Math.random() > 0.5){
        fulfill(); //happy path
    }else{
        reject(); // sad path
    }
});


console.log(myPromise);



//  Similar Ajax we use

myPromise
.then(() => console.log('Yay!'))
.catch(() => console.log("Aww.."));


//g