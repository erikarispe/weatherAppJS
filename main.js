const searchButton = document.querySelector('.submitbutton');
const temperature = document.querySelector('.temperature');
const userInput = document.querySelector('.cityinput');
const weatherBox = document.querySelector('.weatherbox');
const weathercondition = document.querySelector('.condition');
const locationDisplay = document.querySelector('.location');

const weatherAPIkey = '09920fa9fc2faa4cc2ff77c559bb0dc3';

const getWeather = (location) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${weatherAPIkey}`;
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherData = {
                temperature: data.main.temp,
                condition: data.weather[0].main,
                location: data.name,
            };
            return weatherData;
        });
};

const updateUI = (weatherData) => {
    temperature.textContent = `${weatherData.temperature}°C`;
    weathercondition.textContent = weatherData.condition;
    locationDisplay.textContent = weatherData.location;
};

searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const location = userInput.value;
    console.log('button clicked');
    getWeather(location)
        .then(weatherData => {
            updateUI(weatherData);
        });
});
