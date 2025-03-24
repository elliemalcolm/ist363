document.addEventListener("DOMContentLoaded", function () {
    const weatherEndpoint = "https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=precipitation,temperature_2m,cloudcover&temperature_unit=fahrenheit&precipitation_unit=inch&timezone=America/New_York";
    
    function displayWeather(data) {
        const weatherDiv = document.getElementById("weather");
        if (!data || !data.current) {
            weatherDiv.innerHTML = "Could not fetch weather data.";
            return;
        }

        const temperature = data.current.temperature_2m;
        const precipitation = data.current.precipitation;
        const cloudCover = data.current.cloudcover;

        // Determine cloud cover emoji
        const cloudEmoji = cloudCover > 50 ? "☁️" : "☀️";

        weatherDiv.innerHTML = `
            <p>Precipitation: ${precipitation}"</p>
            <p>Temperature: ${temperature}°F</p>
            <div class="weather-emoji">${cloudEmoji}</div>
        `;
    }
    
    function fetchWeather() {
        const request = new XMLHttpRequest();
        request.open("GET", weatherEndpoint);
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    const responseData = JSON.parse(request.responseText);
                    displayWeather(responseData);
                } else {
                    displayWeather(null);
                }
            }
        };
        request.send();
    }
    
    fetchWeather();
});
