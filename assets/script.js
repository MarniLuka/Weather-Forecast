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
            var date = dayjs().format('MM/DD/YYY');
            $('#cardCity').textContent = data.name;
            $('cardDate0').textContent = date;
            $('cardTemp0').textContent = data.main.temp;
            $('cardWind0').textContent = data.wind.speed;
            $('cardHumidity0').textContent = data.main.humidity;

            return
        })
}


searchBtn.addEventListener('click', weatherDisplay);