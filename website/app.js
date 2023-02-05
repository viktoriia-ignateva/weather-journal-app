/* Global Variables */
const key = 'e43bef9de1a014173942935fe5fccc3f'
const openWeatherMapBaseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric&zip=`

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

const getWeather = async (zipcode) => {
    const response = await fetch(openWeatherMapBaseUrl + zipcode, {
        method: 'GET',
    });

    try {
        const weatherData = await response.json();
        console.log("weather data: " + JSON.stringify(weatherData));
        return weatherData;
    } catch (error) {
        console.log("error", error);
    }
}

const onGenerate = () => {
    const zip = document.getElementById("zip").value

    if (zip) {
        getWeather(zip)
    }
}

document.getElementById("generate").addEventListener("click", onGenerate);