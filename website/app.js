/* Global Variables */
const key = 'e43bef9de1a014173942935fe5fccc3f'
const openWeatherMapBaseUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric&zip=`
const postDataUrl = '/projectData'

const getWeather = async (zipcode) => {
    const response = await fetch(openWeatherMapBaseUrl + zipcode, {
        method: 'GET',
    });

    try {
        return await response.json();
    } catch (error) {
        console.log("error", error);
    }
}

const postData = async (projectData) => {
    await fetch(postDataUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(projectData),
    });
}

const generateProjectData = (weatherData) => {
    const newDate =  new Date().toISOString().slice(0, 10);

    const userResponse = document.getElementById("feelings").value

    return {
        temperature: weatherData.main.temp,
        date: newDate,
        userResponse: userResponse
    }
}

const onGenerate = async () => {
    const zip = document.getElementById("zip").value

    if (zip) {
        const weatherData = await getWeather(zip)
        const projectData = generateProjectData(weatherData)
        postData(projectData)
    }
}

document.getElementById("generate").addEventListener("click", onGenerate);