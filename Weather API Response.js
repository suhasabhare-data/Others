const apiKey = 'YOUR_API_KEY'; // Replace with your actual WeatherStack API key
const weatherDiv = document.getElementById('weather');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const locationInput = document.getElementById('location');

getWeatherBtn.addEventListener('click', () => {
    const location = locationInput.value;
    getWeather(location);
});

function getWeather(location) {
    fetch(`https://api.weatherstack.com/current?access_key=${'58eddf585fd717f07a2e3cfcb0f6c9da'}&query=${location}`)
        .then(response => response.json())
        .then(data => {
            const temp = (data.current.temperature - 273.15).toFixed(2); // Convert Kelvin to Celsius
            const weather = data.current.weather_descriptions[0];
            weatherDiv.innerHTML = `Temperature: ${temp}°C <br> Weather: ${weather}`;
        })
        .catch(error => {
            weatherDiv.innerHTML = 'Error fetching data. Please try again.';
        });
}
