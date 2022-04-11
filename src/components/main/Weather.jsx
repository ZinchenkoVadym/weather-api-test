import './Main.css';
import CurrentWeatherCityContainer from './currentWeatherCity/CurrentWeatherCityContainer';
import CarouselWeatherCityContainer from './corouselWeatherCity/CarouselWeatherCityContainer';
import {TailSpin} from 'react-loader-spinner';
import React from 'react';

const Weather = (props) => {
    if (props.loaderMain) {
        return (<div className='loader__main'>
            <TailSpin color='rgba(15,58,83,0.62)' height='300px' width='300px'/>
        </div>);
    }
    if (!props.weatherData.length) {
        return <div className='add_city'>
            <div>
                <h1>Write your city&#9757;</h1>
            </div>
        </div>;
    }

    return (
        <>
            <CurrentWeatherCityContainer {...props}/>
            <CarouselWeatherCityContainer/>
        </>

    );
};

export default Weather;