import React from 'react';
import '../Main.css'
import './CarouselWeatherCity.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const CarouselWeatherCity = (props) => {
    const sliderSettings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }
    return (
        <div className='container'>
                <div className='weather_list'>
                    <div className='content'>
            <Slider {...sliderSettings}>
                {props.carouselData.slice(0, 7).map(e => {
                    // let classNameImg = e.weather[0].description.replace(/ /i, '_');
                    let date = e.dt_txt.split(' ');
                    let time = date[1].slice(0, 5)
                    return (
                        <div
                            className='weather_item'
                            key={e.dt}
                        >
                            <div className='qwe'>
                            <div className='date'>{date[0]}</div>
                            <div className='time'>{time}</div>
                            <div className='img_carousel'>
                                <img src={`http://openweathermap.org/img/wn/${props.carouselData[0].weather[0].icon}@2x.png`} />
                            </div>
                            <div className='temp'>{Math.ceil(e.main.temp)}&deg;c</div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
                    </div>
                </div>
        </div>





    );
};

export default CarouselWeatherCity;