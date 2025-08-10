let url = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
let apikey = "874dd4fe3a6a430d31927c4dc67ba7dd";
let temp = document.querySelector(".temp");
let cityName = document.querySelector(".city");
let humidity = document.querySelector(".humidityPercentage");
let windSpeed = document.querySelector(".windSpeed");
let search = document.querySelector(".btn");
let inputbox = document.querySelector("#cityname");
let img = document.querySelector(".rain");


async function getWeather(city){

let response = await axios.get(url + `&appid=${apikey}`+ `&q=${city}`);
    temp.innerText = response.data.main.temp + "°C";
    cityName.innerText = response.data.name;
    humidity.innerText = response.data.main.humidity + "%";
    windSpeed.innerText = response.data.wind.speed +"km/h";
    if(response.data.weather[0].main == "Smoke"){
        img.src = "drizzle.png";
    }else
    if(response.data.weather[0].main == "Clear"){
        img.src = "clear.png";
    }else
    if(response.data.weather[0].main == "Clouds"){
        img.src = "clouds.png";
    }

    
}
search.addEventListener("click",()=>{
    getWeather(inputbox.value);
});
