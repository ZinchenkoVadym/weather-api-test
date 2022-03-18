import './Main.css'
import CurrentWeatherCityContainer from "./currentWeatherCity/CurrentWeatherCityContainer";
import CarouselWeatherCityContainer from "./corouselWeatherCity/CarouselWeatherCityContainer";
import {TailSpin} from "react-loader-spinner";
import React, {useEffect} from "react";

const Weather = (props) => {
    let citySessionStorage = JSON.parse(sessionStorage.getItem('city'))
    useEffect(() => {
        if (citySessionStorage !== null){
            props.getCityWeather(citySessionStorage)
        }

    }, [])
    if(props.loaderMain) {
        return (<div className='loader__main' style={{width: '100%', height: '100vh', alignItems: 'center', textAlign: 'center'}}>
            <TailSpin color='rgba(15,58,83,0.62)' height='300px' width='300px'/>
        </div>)
    }
    if (!props.weatherData.length) {
        return <div style={{width: '100%', height: '100vh', alignItems: 'center', textAlign: 'center'}}>
            <h1 style={{fontSize: '42px'}}>ADD CITY</h1>
        </div>
    }
    return (
        <>
          <CurrentWeatherCityContainer {...props}/>
          <CarouselWeatherCityContainer/>
      </>

    );
};

export default Weather;