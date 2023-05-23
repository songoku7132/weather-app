const getWeekDay = (datec) => {
  const days = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[datec.getDay()];
};
const makeDays = (Data) => {
  for (let i = 1; i < 14; i++) {
    const days = document.querySelector(`#day-${i}`);
    const temps = document.querySelector(`#temp-${i}`);
    const imgs = document.querySelector(`#img-${i}`);

    const daysDate = Data.forecast.forecastday[i].date;
    const gone = new Date(daysDate);
    const weekDay = getWeekDay(gone);
    const maxDaysTemp = Data.forecast.forecastday[i].day.maxtemp_c;
    const minDaysTemp = Data.forecast.forecastday[i].day.mintemp_c;
    const imgFir = Data.forecast.forecastday[i].day.condition.icon;
    const imgFix = imgFir.substr(21);
    days.innerHTML = weekDay;
    temps.innerHTML = `${maxDaysTemp}°C - ${minDaysTemp}°C`;
    imgs.src = imgFix;
  }
};
export { makeDays, getWeekDay };
