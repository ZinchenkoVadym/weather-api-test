import React from 'react';
import './CurrentWeatherCity.scss';
import '../Main.css';
import '../../../App.css';
import {TailSpin} from 'react-loader-spinner';
import PropTypes from 'prop-types';

const CurrentWeatherCity = (props) => {
  const description = props.weatherData[0].weather[0].description;
  const descriptionData = description[0].toUpperCase() + description.slice(1);
  const iconWeather = `https://openweathermap.org/img/wn/${props.weatherData[0].weather[0].icon}@2x.png`;
  const cityName = props.cityData.name;
  const country = props.cityData.country;
  const tempCelsius = Math.round(props.weatherData[0].main.temp);
  const tempFahrenheit = Math.round(props.tempFahrenheit);
  const feelsLike = Math.round(props.weatherData[0].main.feels_like);
  const humidity = props.weatherData[0].main.humidity;
  const windSpeed = Math.round(props.weatherData[0].wind.speed);
  const weatherUpdate = new Date().toLocaleTimeString().slice(0, -3);


  return (
    <section className='current__weather'>
      <div className='container current-weather__container'>
        <div className='current-weather__block'>
          <div className='location__block'>
            <span>{cityName}, </span>
            <span>{country}</span>
          </div>
          <div className='temperature__block'>
            <div className='img'>
              <img src={iconWeather} alt={'img'}/>
            </div>
            {props.loaderFahrenheit ?
              <div className='temp'>
                <TailSpin color='rgba(15,58,83,0.62)'/>
              </div> :
              <div className='temp'>{props.toggleTempBool ?
                Math.round(tempFahrenheit) :
                Math.round(tempCelsius)
              }
              </div>
            }
            <div className='celsius'>
              <button
                className={`${props.toggleTempBool ? 'active' : ''}`}
                onClick={() => {
                  props.getFahrenheitTemp(props.cityData.name);
                }}> &deg;F
              </button>
              <button
                className={`${props.toggleTempBool ? '' : 'active'}`}
                onClick={() => props.toggleTemp(false)}> &deg;C
              </button>
            </div>
          </div>
          <div className='mostly__clear'>{descriptionData}</div>
          <div className='update'>Weather update: {weatherUpdate}</div>
          <div className='weather__parametrs'>
            <div>Humidity: {humidity}%</div>
            <div>Temperature: {tempCelsius} &deg;C</div>
            <div>Feels-like: {feelsLike} &deg;C</div>
            <div>Wind speed: {windSpeed} m/s</div>
          </div>
        </div>
      </div>
    </section>
  );
};

CurrentWeatherCity.propTypes = {
  toggleTempBool: PropTypes.bool,
  weatherData: PropTypes.array,
  cityData: PropTypes.object,
  getFahrenheitTemp: PropTypes.func,
  toggleTemp: PropTypes.func,
  loaderFahrenheit: PropTypes.bool,
  tempFahrenheit: PropTypes.string,
};

export default CurrentWeatherCity;
