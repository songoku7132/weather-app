import _ from 'lodash';
import './style.css';
import showWeather from './current';
import slideShow from './slide-show';

const weather = () => {
  const placeName = document.querySelector('.search');
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener('click', () => {
    showWeather(placeName.value);
  });
  placeName.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      searchBtn.click();
    }
  });
  showWeather('Tartu,Estonia');
  const myGalleryD = [
    { slide: 0 },
    { slide: -290 },
    { slide: -580 },
    { slide: -870 },
    { slide: -1160 },
    { slide: -1450 },
    { slide: -1740 },
    { slide: -2030 },
  ];
  const myGalleryH = [
    { slide: 0 },
    { slide: -290 },
    { slide: -580 },
    { slide: -870 },
    { slide: -1160 },
    { slide: -1450 },
    { slide: -1740 },
    { slide: -2030 },
    { slide: -2320 },
    { slide: -2610 },
    { slide: -2900 },
    { slide: -3190 },
    { slide: -3480 },
    { slide: -3770 },
    { slide: -4060 },
    { slide: -4350 },
    { slide: -4640 },
    { slide: -4930 },
    { slide: -5220 },
  ];
  slideShow('#l-btn1', '#r-btn1', '#for-con1', myGalleryD, '7');
  slideShow('#l-btn2', '#r-btn2', '#for-con2', myGalleryH, '18');
};
weather();
