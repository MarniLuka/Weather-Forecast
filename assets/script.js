// API key to use Open Weather Map
const APIKey = 'a698c9b2fcc8b543ace375d22e7dea94'
// Targets the user input
var city = document.getElementById("searchInput").value;
// Targets the button
var searchBtn = document.getElementById("searchBtn");
// Empty array for previously searched cities
var searchedCities = [];
// Targets big dashboard dispaly
var dashboardDisplay = document.getElementById('dashboardDisplay')


// function saveCity() {
//     var cities = JSON.parse(localStorage.getItem(''))
// }

function weatherDisplay() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey)
        .then (function (response) {
            if (response.status !== 200) {
                alert('City Unavaialbe. Please Input a Valid City');
                return;
            }
            return response.json();
        })
        .then (function (data) {
            var date = dayjs().format('MM/DD/yY');
            $('#cardCity').textContent = data.name;
            $('cardDate0').textContent = date;
            $('cardTemp0').textContent = data.main.temp;
            $('cardWind0').textContent = data.wind.speed;
            $('cardHumidity0').textContent = data.main.humidity;

            return
        })
}

function fiveDayDisplay() {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey)
        .then (function (response) {
            return response.json();
        })
        .then (function (data) {
            $('cardTemp1').textContent = data.list[0].main.temp + "°F";
            $('cardWind1').textContent = data.list[0].wind.speed + "MPH";
            $('cardHumidity1').textContent = data.list[0].main.humidity + "%";
            
            $('cardTemp2').textContent = data.list[1].main.temp + "°F";
            $('cardWind2').textContent = data.list[1].wind.speed + "MPH";
            $('cardHumidity2').textContent = data.list[1].main.humidity + "%";

            $('cardTemp3').textContent = data.list[2].main.temp + "°F";
            $('cardWind3').textContent = data.list[2].wind.speed + "MPH";
            $('cardHumidity3').textContent = data.list[2].main.humidity + "%";

            $('cardTemp4').textContent = data.list[3].main.temp + "°F";
            $('cardWind4').textContent = data.list[3].wind.speed + "MPH";
            $('cardHumidity4').textContent = data.list[3].main.humidity + "%";

            $('cardTemp5').textContent = data.list[4].main.temp + "°F";
            $('cardWind5').textContent = data.list[4].wind.speed + "MPH";
            $('cardHumidity5').textContent = data.list[4].main.humidity + "%";
        })
}


searchBtn.addEventListener('click', weatherDisplay);searchBtn.addEventListener('click', fiveDayDisplay);