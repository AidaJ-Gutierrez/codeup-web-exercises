"use strict";

// added map to get display on site
mapboxgl.accessToken = MAPBOX_KEY;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom: 10,
    center: [-98.4936, 29.4241],
    dragRotate: true,
});

//Create marker on map
var marker = new mapboxgl.Marker({color: '#E23E57'})
    .setLngLat([-98.4936, 29.4241]).setDraggable(true)
    .addTo(map);

//Onclick event to get location on map of user click (console.log)
map.on('click', function (e) {
    e.preventDefault();
    console.log(e)
});

// open weather map layout for 5 day forecast including loop and appending to html
var fiveDaysWeather
$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_KEY,
    lat: 29.4241,
    lon: -98.4936,
    units: 'imperial',
    exclude: 'hourly, minutely, alerts',
}).done(function (data) {
    console.log(data);
    fiveDaysWeather = data.daily;
//loop through amount of days want displayed with weather
    for (var i = 0; i <= 5; i++) {
        var html = renderWeather(fiveDaysWeather[i]);
        $(".weatherInfo").eq(i).append(html);
    }
});

//Function to display layout of cards when showing weather and info
function renderWeather(weather) {
    var html = "";
    html += "<div >";
    html += "<p>" + convertDateTime(weather.dt) + "</p>";
    html += "<img class='img-fluid' src='" + "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png" + "'>"
    html += "<p> Temp: " + weather.temp.day + "</p>";
    html += "<p> Weather: " + weather.weather[0].main + "</p>";
    html += "<p> Wind: " + weather.wind_speed + "</p>";
    html += "<p> Humidity: " + weather.humidity + "</p>";
    html += "<p> Pressure: " + weather.pressure + "</p>";
    html += "</div>";

    return html;
}
//call the function for the search when marker is dragged
const coordinates = document.getElementById('coordinates');
function onDragEnd() {
    const lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;


    reverseGeocode( $(coordinates.lon,coordinates.lat), MAPBOX_KEY).then(function (results) {
        // Display current location city name on the navbar
        // $("#current-city").html("Current Weather in " + $(markSearch));  // case insensitive
        // marker at new location
        marker.setLngLat(results);
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            // q: $('#coordinates').val().split(", ")[0],// query the input search
            appid: OPEN_WEATHER_KEY,
            units: "imperial"
        }).done(function (weather) {
            console.log(weather);
        });
        // fly to the place searched
        map.flyTo({
            place_name: results,
            zoom: 10,
            speed: 0.8
        });
// Update the five-day forecast in new location
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_KEY,
            lat: results[1],
            lon: results[0],
            units: 'imperial',
            exclude: 'hourly, minutely, alerts',
        }).done(function (data) {
            console.log(data);
            fiveDaysWeather = data.daily;

            // Clear the html so the weather does not stack after hitting submit button when searching.
            $(".weatherInfo").html('')

            //loop through amount of days want displayed with weather
            for (var i = 0; i <= 5; i++) {
                var html = renderWeather(fiveDaysWeather[i]);

                $(".weatherInfo").eq(i).append(html);

            }
        });
    });

}

marker.on('dragend', onDragEnd);




// function for converting the date to readable format
function convertDateTime(time) {

    var date = new Date(time * 1000);
    return date.toLocaleDateString("en-US");
}


// call the Search function using search bar:
$("#search").click(function (e) {
    e.preventDefault();

    // Get coordinates using goecode & update current city and weather
    geocode($("#cityInput").val(), MAPBOX_KEY).then(function (results) {

        // Display current location city name on the navbar
        $("#current-city").html("Current Weather in " + $("#cityInput").val().charAt(0).toUpperCase() + $("#cityInput").val().slice(1).toLowerCase());  // case insensitive
        // marker at new location
        marker.setLngLat(results);
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            q: $("#cityInput").val().split(", ")[0],// query the input search
            appid: OPEN_WEATHER_KEY,
            units: "imperial"
        }).done(function (weather) {
            console.log(weather);
        });
        // fly to the place searched
        map.flyTo({
            center: results,
            zoom: 10,
            speed: 0.8
        });
        // Update the five-day forecast in new location
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            APPID: OPEN_WEATHER_KEY,
            lat: results[1],
            lon: results[0],
            units: 'imperial',
            exclude: 'hourly, minutely, alerts',
        }).done(function (data) {
            console.log(data);
            fiveDaysWeather = data.daily;

            // Clear the html so the weather does not stack after hitting submit button when searching.
            $(".weatherInfo").html('')

            //loop through amount of days want displayed with weather
            for (var i = 0; i <= 5; i++) {
                var html = renderWeather(fiveDaysWeather[i]);

                $(".weatherInfo").eq(i).append(html);

                $("#cityInput").val("");  // clear input
            }
        });
    });
})