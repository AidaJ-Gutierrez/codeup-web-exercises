//
// fetch('https://api.github.com/users/AidaJ-Gutierrez/events', {headers: {'Authorization':GITHUB_KEY}})
//     .then(function (results) {
//         console.log(results);
//         return results.json()
//     })
//     .then(function (resultsArray) {
//         console.log(resultsArray);
//         var date = resultsArray[0].created_at;
//
//         console.log( date)
//     });

function recentCommit(username){

    fetch('https://api.github.com/users/' + username + '/events', {headers: {'Authorization':GITHUB_KEY}})
        .then(function (results) {
            console.log(results);
            return results.json()
        })
        .then(function (resultsArray) {
            console.log(resultsArray);
            var date = resultsArray[0].created_at;
            console.log(username + ' last commit was : ' + date)

        });

}
console.log(recentCommit('AidaJ-Gutierrez'));


const wait = (milliseconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, milliseconds)
    });
};


wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
