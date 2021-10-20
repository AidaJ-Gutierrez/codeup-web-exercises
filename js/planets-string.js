(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray= planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
var newPlanetsString =   planetsArray.join('<br>');
console.log(newPlanetsString);
//Why might this be useful?


// //Bonus
;


   var planetLen = planetsArray.length;

    var planet = "<ul>";
    for (var p = 0; p < planetLen; p++) {
        planet += "<li>" + planetsArray[p] + "</li>";
        planet += "\n";
    }
    planet += "</ul>";
console.log(planet);

    document.write(planet);

// David's Answer
    // var unorderedListOfPlanets = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>"
    // console.log(unorderedListOfPlanets);
    // document.write(unorderedListOfPlanets);

})();