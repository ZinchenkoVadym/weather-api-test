import {
    CHANGE_CITY,
    CITY_DATA,
    CITY_NOT_FOUND, TEMP_FAHRENHEIT,
    TOGGLE_LOADER_FAHRENHEIT,
    TOGGLE_LOADER_MAIN, TOGGLE_TEMP,
    WEATHER_DATA
} from './types';

export const cityNotFound = (bool) => ({type: CITY_NOT_FOUND, payload: bool});

export const changeCity = cityName => ({type: CHANGE_CITY, payload: cityName});

export const cityData = cityData => ({type: CITY_DATA, payload: cityData});

export const weatherData = weatherData => ({type: WEATHER_DATA, payload: weatherData});

export const tempFahrenheit = temp => ({type: TEMP_FAHRENHEIT, payload: temp});

export const toggleTemp = bool => ({type: TOGGLE_TEMP, payload: bool});

export const loaderToggleFahrenheit = (bool) => ({type: TOGGLE_LOADER_FAHRENHEIT, payload: bool});

export const loaderToggleMain = (bool) => ({type: TOGGLE_LOADER_MAIN, payload: bool});
