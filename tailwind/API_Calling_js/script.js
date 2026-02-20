const button = document.getElementById("search-button")
const input = document.getElementById("city-input")

const cityName = document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const cityTemp = document.getElementById("city-temp")
const cityWind = document.getElementById("city-wind")

async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=8ced1c6438fa47d685c195903261902&q=${cityName}&aqi=yes`  
    );
    return await promise.json()
}


button.addEventListener('click', async()=>{
    const value = input.value;
    const result = await getData(value)
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTime.innerText = `${result.current.localtime}`
    cityTemp.innerText = `${result.current.temp_c} C`
    cityWind.innerText = `${result.current.wind_kph} km/h`
})



// http://api.weatherapi.com/v1/current.json?key=8ced1c6438fa47d685c195903261902&q=London&aqi=yes
