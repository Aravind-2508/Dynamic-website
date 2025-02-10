document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const cityInput = document.getElementById('cityInput');
    const weatherDiv = document.getElementById('weather');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('windSpeed');
    const weatherIcon = document.getElementById('weatherIcon');
    const toggleTemp = document.getElementById('toggleTemp');
    const hourlyForecast = document.getElementById('hourlyForecast');
    let currentTempCelsius;

    function getWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${be4c3aa0f21b2913b4554ccd6209fe0c}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                cityName.innerText = data.name;
                currentTempCelsius = data.main.temp;
                temperature.innerText = `Temperature: ${currentTempCelsius.toFixed(1)}°C`;
                description.innerText = `Description: ${data.weather[0].description}`;
                humidity.innerText = `Humidity: ${data.main.humidity}%`;
                windSpeed.innerText = `Wind Speed: ${data.wind.speed} m/s`;
                weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
                weatherDiv.style.display = 'block';
                getHourlyForecast(data.coord.lat, data.coord.lon);
            })
            .catch(error => {
                alert('Error fetching weather data. Please try again.');
            });
    }

    function getHourlyForecast(lat, lon) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${be4c3aa0f21b2913b4554ccd6209fe0c}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                hourlyForecast.innerHTML = '';
                for (let i = 0; i < 24; i += 3) {
                    const hourData = data.hourly[i];
                    const hourDiv = document.createElement('div');
                    hourDiv.classList.add('hour');
                    const date = new Date(hourData.dt * 1000);
                    const hours = date.getHours();
                    hourDiv.innerHTML = `
                        <p>${hours}:00</p>
                        <p>${hourData.temp.toFixed(1)}°C</p>
                        <img src="http://openweathermap.org/img/wn/${hourData.weather[0].icon}.png" alt="Weather Icon">
                    `;
                    hourlyForecast.appendChild(hourDiv);
                }
            })
            .catch(error => {
                alert('Error fetching hourly forecast. Please try again.');
            });
    }

    function convertTemperature() {
        if (temperature.innerText.includes('°C')) {
            const tempFahrenheit = (currentTempCelsius * 9/5) + 32;
            temperature.innerText = `Temperature: ${tempFahrenheit.toFixed(1)}°F`;
            toggleTemp.innerText = 'Toggle °F/°C';
        } else {
            temperature.innerText = `Temperature: ${currentTempCelsius.toFixed(1)}°C`;
            toggleTemp.innerText = 'Toggle °C/°F';
        }
    }

    searchButton.addEventListener('click', function() {
        const city = cityInput.value;
        if (city) {
            getWeather(city);
        } else {
            alert('Please enter a city name.');
        }
    });

    toggleTemp.addEventListener('click', convertTemperature);

    // Geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${be4c3aa0f21b2913b4554ccd6209fe0c}&units=metric`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    cityInput.value = data.name;
                    getWeather(data.name);
                })
                .catch(error => {
                    alert('Error fetching weather data. Please try again.');
                });
        });
    }
});
