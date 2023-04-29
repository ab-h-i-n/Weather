const key = "4c32fdbc865bade9d4974579de538855";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
var cityName = document.querySelector("#cityname");
var searchBtn = document.querySelector(".searchbutton");
var weatherIcon = document.querySelector(".weather-icon");

window.onload = function(){
    checkWeather("chendamangalam");
}

searchBtn.addEventListener("click",()=>{
    checkWeather(cityName.value);
});
window.addEventListener("keypress",(e)=>{
    if(e.key === "Enter"){
        checkWeather(cityName.value);
        e.preventDefault();
    }
    
});



async function checkWeather(city){

        cityName.value = "";
        const response = await fetch(apiUrl +city+'&appid='+key);
        var data = await response.json();
        console.log(data);
        if(data.cod ==200){
            console.log(data);
            document.querySelector(".city").innerText = data.name;
            document.querySelector(".temp").innerHTML =  Math.floor(data.main.temp)+"&deg;C";
            document.querySelector(".humidity").innerText = data.main.humidity+"%";
            document.querySelector(".wind").innerText = data.wind.speed + " km/h";
            
            if(data.weather[0].main === "Clouds"){
                weatherIcon.src = "./images/clouds.png"

            }else if(data.weather[0].main === "Clear"){
                weatherIcon.src = "./images/clear.png"
            }else if(data.weather[0].main === "Drizzle"){
                weatherIcon.src = "./images/drizzle.png"
            }else if(data.weather[0].main === "Mist"){
                weatherIcon.src = "./images/mist.png"
            }else if(data.weather[0].main === "Rain"){
                weatherIcon.src = "./images/rain.png"
            }else if(data.weather[0].main === "Snow"){
                weatherIcon.src = "./images/snow.png"
            }
        }
        else{
            var searchBox = document.querySelector(".search");
            searchBox.classList.add("error");
            setTimeout(() => {
                searchBox.classList.remove("error");
            }, 800);
        }
}

data.addEventListener("change",()=>{
    console.log(data);
            document.querySelector(".city").innerText = data.name;
            document.querySelector(".temp").innerHTML =  Math.floor(data.main.temp)+"&deg;C";
            document.querySelector(".humidity").innerText = data.main.humidity+"%";
            document.querySelector(".wind").innerText = data.wind.speed + " km/h";
            
            if(data.weather[0].main === "Clouds"){
                weatherIcon.src = "./images/clouds.png"

            }else if(data.weather[0].main === "Clear"){
                weatherIcon.src = "./images/clear.png"
            }else if(data.weather[0].main === "Drizzle"){
                weatherIcon.src = "./images/drizzle.png"
            }else if(data.weather[0].main === "Mist"){
                weatherIcon.src = "./images/mist.png"
            }else if(data.weather[0].main === "Rain"){
                weatherIcon.src = "./images/rain.png"
            }else if(data.weather[0].main === "Snow"){
                weatherIcon.src = "./images/snow.png"
            }
})