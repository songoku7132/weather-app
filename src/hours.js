const Hello = () => {
  alert('Hello World!');
};

const makeBtn = () => {
  for (let i = 1; i < 14; i++) {
    const Btn = document.getElementById(`${i}`);
    Btn.addEventListener('click', Hello);
  }
};

const makeHours = (day, Data) => {
  for (let i = 1; i < 25; i++) {
    const time = document.querySelector(`#hour-${i}`);
    const temp = document.querySelector(`#hour-temp-${i}`);
    const img = document.querySelector(`#hour-img-${i}`);
    const timeFix = Data.forecast.forecastday[day].hour[i - 1].time;
    const timeAFix = timeFix.substr(10);
    const tempVal = Data.forecast.forecastday[day].hour[i - 1].temp_c;
    const imgIcon = Data.forecast.forecastday[day].hour[i - 1].condition.icon;
    const imgFix = imgIcon.substr(21);
    time.innerHTML = timeAFix;
    temp.innerHTML = `${tempVal}°C`;
    img.src = imgFix;
  }
};
export { makeHours, makeBtn };
