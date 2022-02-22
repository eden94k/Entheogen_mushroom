const nyWeatherApi = "https://api.openweathermap.org/data/2.5/onecall?lat=40.71455&lon=-74.00712&exclude=alerts, hourly, minutely, daily&units=imperial&appid=7443632bda804a9449c52da809595abc"

async function nyWeather () {
  const response = await fetch(nyWeatherApi)
  const data = await response.json();
  // const { temp} = data;
  // return console.log(data.current.feels_like); - How do I access both

   document.getElementById('nyc').textContent = data.current.temp;

}

nyWeather();
