import React from 'react';
import './CurrentWeatherCity.css'
import '../Main.css'
import '../../../App.css'

import {TailSpin} from "react-loader-spinner";

const CurrentWeatherCity = (props) => {
    let description = props.weatherData[0].weather[0].description;
    let descriptionData = description[0].toUpperCase() + description.slice(1)
    let classNameImg = description.replace(/ /i, '_');

    return (
        <section className='current__weather'>
            <div className='container current-weather__container'>
                <div className='current-weather__block'>
                    <div className='location__block'>
                        <span>{props.cityData.name}, </span>
                        <span>{props.cityData.country}</span>
                    </div>
                    <div className='temperature__block'>
                        <div className='img'>
                            <img src={`http://openweathermap.org/img/wn/${props.weatherData[0].weather[0].icon}@2x.png`}/>
                        </div>

                        {props.loaderFahrenheit
                            ? <div className='temp'><TailSpin
                                color='rgba(15,58,83,0.62)'
                            /></div>
                            : <div className='temp'>{
                                props.toggleTempBool
                                    ? Math.round(props.tempFahrenheit)
                                    : Math.round(props.weatherData[0].main.temp)}

                            </div>}
                        <div className='celcium'>
                            <button
                                onClick={() => {
                                    props.getFahrenheitTemp(props.cityData.name)
                                }}
                            > &deg;F
                            </button>
                            <button
                                onClick={() => {
                                    props.toggleTemp(false)
                                }}
                            > &deg;C
                            </button>
                        </div>
                    </div>
                    <div className='mostly__clear'>{descriptionData}</div>
                    <div className='update'>Weather update: {new Date().toLocaleTimeString().slice(0,-3) }</div>
                    <div className='weather__parametrs'>
                        <div>Humidity: {props.weatherData[0].main.humidity}%</div>
                        <div>Temperature: {Math.round(props.weatherData[0].main.temp)} celcium</div>
                        <div>Feels-like: {Math.round(props.weatherData[0].main.feels_like)} celsium</div>
                        <div>Wind speed: {Math.round(props.weatherData[0].wind.speed)} m/s</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentWeatherCity;