import { makeDays, getWeekDay } from './days';
import { makeHours } from './hours';

async function showWeather(town) {
  const placeName = document.querySelector('.search');
  placeName.value = '';
  try {
    const condition = document.querySelector('.condition');
    const cityName = document.querySelector('.city-name');
    const date = document.querySelector('.date');
    const temperature = document.querySelector('.temp');
    const img = document.querySelector('.condition-img');
    const feelsLike = document.querySelector('.feels-like');
    const humidity = document.querySelector('.humidity');
    const chahceOfRain = document.querySelector('.chance-of-rain');
    const windSpeed = document.querySelector('.wind-speed');
    const firstCell = document.querySelector('#day-1');

    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=880b340e19134025adb60047231705&q=${town}&days=14`, { mode: 'cors' });
    const weatherData = await response.json();
    const locationName = weatherData.location.name;
    const cloudy = weatherData.current.condition.text;
    const localTime = weatherData.location.localtime;
    const temp = weatherData.current.temp_c;
    const feelsL = weatherData.current.feelslike_c;
    const humid = weatherData.current.humidity;
    const rain = weatherData.forecast.forecastday[0].day.daily_chance_of_rain;
    const wind = weatherData.forecast.forecastday[0].day.maxwind_kph;
    const imgFir = weatherData.current.condition.icon;

    const gone = new Date(localTime);
    const weekDay = getWeekDay(gone);
    const imgFix = imgFir.substr(21);
    condition.innerHTML = cloudy;
    cityName.innerHTML = locationName;
    date.innerHTML = `${weekDay} ${localTime} pm`;
    temperature.innerHTML = `${temp} °C`;
    feelsLike.innerHTML = `${feelsL} °C`;
    humidity.innerHTML = `${humid} %`;
    chahceOfRain.innerHTML = `${rain} %`;
    windSpeed.innerHTML = `${wind} km/h`;
    img.src = imgFix;
    firstCell.innerHTML = weekDay;
    makeDays(weatherData);
    for (let i = 1; i < 14; i++) {
      const Btn = document.getElementById(`${i}`);
      Btn.addEventListener('click', () => {
        makeHours(i, weatherData);
      });
    }
  } catch (err) {
    alert(err);
  }
}
export default showWeather;
