import React from 'react';
import '../Main.css';
import './CarouselWeatherCity.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PropTypes from 'prop-types';

const CarouselWeatherCity = (props) => {
  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const iconWeather = `http://openweathermap.org/img/wn/${props.carouselData[0].weather[0].icon}@2x.png`;

  return (
    <div className='container'>
      <div className='weather_list'>
        <div className='content'>
          <Slider {...sliderSettings}>
            {props.carouselData.slice(0, 7).map((e) => {
              const date = e.dt_txt.split(' ');
              const time = date[1].slice(0, 5);
              const temp = Math.ceil(e.main.temp);
              return (
                <div className='weather_item' key={e.dt}>
                  <div className='weather__data'>
                    <div className='date'>{date[0]}</div>
                    <div className='time'>{time}</div>
                    <div className='img_carousel'>
                      <img src={iconWeather} alt={'img'}/>
                    </div>
                    <div className='temp'>{temp}&deg;c</div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

CarouselWeatherCity.propTypes = {
  carouselData: PropTypes.array,
};

export default CarouselWeatherCity;
