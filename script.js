//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// variables
var weatherInp = document.getElementById("weather-input");
var searchBut = document.getElementById("search");
var queryURL = "http://api.openweathermap.org/data/2.5/weather?"
var APIkey = "869e9a32e52cb52888984677937a5d9c";
var temp = document.getElementById("temp");
var wc = document.getElementById("wc");
var city = document.getElementById("city");
var humid = document.getElementById("humid");
var windspd = document.getElementById("windspd");
var latLi = document.getElementById("lat");
var lonLi = document.getElementById("lon");
var dayOne = document.getElementById("day1");
var dayTwo = document.getElementById("day2");
var dayThree = document.getElementById("day3");
var dayFour = document.getElementById("day4");
var dayFive = document.getElementById("day5");
var tabs = [];
//var searchedCity = weatherInp.value.trim();
var historyTab = localStorage.getItem("Search History");
function searchhistory(){
    var list = document.getElementById("history-list");
    // for(var i = 0; i < tabs.length; i++){
    //     list = tabs[i];
    //     var li = document.createElement("li");
    //     li.textContent = list;
    //     li.setAttribute("data-index", i);
        

    // }
    list.textContent = historyTab;
    console.log("hello world");
    console.log(list);

//.getItem = searchBut.value("city", )
// check local storage for seacrh history. If there, then load the search history.
 }


//Make a basic API request
//http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=
function showLondon(){
    var requestURL = "https://api.openweathermap.org/geo/1.0/direct?q=" + weatherInp.value + "&limit=5&appid="+ APIkey;
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
    var historyTab = document.querySelector("#weather-input").value;
    localStorage.setItem("Search History", historyTab);
    getWeather(data);
    fiveForecast(data);
    // init();
    searchhistory()
}
)
function fiveForecast(data){
    var img = document.getElementById("image1")
    var lat = data[0].lat;
    var lon = data[0].lon;
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+APIkey;
    fetch(forecastURL)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        //img.setAttribute("src", "https://openweathermap.org/img/wn/"+data.list[34].weather[0].icon +".png")
        dayOne.textContent = "Weather: "+data.list[0].weather[0].icon + ", Date: " + data.list[0].dt_txt +", Temperature: "+ data.list[0].main.temp +", Humidity: "+ data.list[0].main.humidity + ", Wind Speed: " + data.list[0].wind.speed;
        dayTwo.textContent = "Weather: "+data.list[10].weather[0].icon + ", Date: " + data.list[10].dt_txt +", Temperature: "+ data.list[10].main.temp +", Humidity: "+ data.list[10].main.humidity + ", Wind Speed: " + data.list[10].wind.speed;
        dayThree.textContent = "Weather: "+data.list[19].weather[0].icon + ", Date: " + data.list[19].dt_txt +", Temperature: "+ data.list[19].main.temp +", Humidity: "+ data.list[19].main.humidity + ", Wind Speed: " + data.list[19].wind.speed;
        dayFour.textContent = "Weather: "+data.list[26].weather[0].icon + ", Date: " + data.list[26].dt_txt +", Temperature: "+ data.list[26].main.temp +", Humidity: "+ data.list[26].main.humidity + ", Wind Speed: " + data.list[26].wind.speed;
        dayFive.textContent = "Weather: "+"https://openweathermap.org/img/wn/"+data.list[34].weather[0].icon +".png"+ ", Date: " + data.list[34].dt_txt +", Temperature: "+ data.list[34].main.temp +", Humidity: "+ data.list[34].main.humidity + ", Wind Speed: " + data.list[34].wind.speed;
        console.log(data);
    })
}
// 2nd API call using LAT and LON
function getWeather(data){
    var lat = data[0].lat;
    var lon = data[0].lon;
    var weatherURL = queryURL + "lat="+lat+"&lon="+lon +"&appid="+ APIkey;
    console.log(weatherURL);
    fetch(weatherURL)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);// show attributes here
        city.textContent = data.name;
        temp.textContent = data.main.temp;
        wc.textContent = data.weather[0].icon;
        humid.textContent = data.main.humidity;
        windspd.textContent = data.wind.speed;
        console.log(humid);
    })
}
}
function storeTabs(){
    localStorage.setItem("Search History", JSON.stringify(tabs));
}
searchBut.addEventListener("click", showLondon,)
function init(){
//
    searchhistory();
 }
 init();