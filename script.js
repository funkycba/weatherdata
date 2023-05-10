//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// variables
var weatherInp = document.getElementById("weather-input");
var searchBut = document.getElementById("search");
var queryURL = "http://api.openweathermap.org/data/2.5/weather?"
var APIkey = "869e9a32e52cb52888984677937a5d9c";
var temp;
var wc;
var city;
var humid;
var windspd;
var latLi = document.getElementById("lat");
var lonLi = document.getElementById("lon");

//Make a basic API request
//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=
function showLondon(){
var requestURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + weatherInp.value + "&limit=5&appid="+ APIkey;
fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (data){ 
    console.log(data[0]);
    console.log(data[0].lat);
    console.log(data[0].lon);
    latLi.textContent = data[0].lat;
    lonLi.textContent = data[0].lon;
    console.log(latLi);
    getWeather(data);
}
)

// 2nd API call using LAT and LON
function getWeather(data){
    var lat = data[0].lat;
    var lon = data[0].lon;
    var weatherURL = queryURL + "lat="+lat+"lon="+lon +"&appid="+ APIkey;
    console.log(weatherURL);
    fetch(weatherURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
    })
}
}
searchBut.addEventListener("click", showLondon,)