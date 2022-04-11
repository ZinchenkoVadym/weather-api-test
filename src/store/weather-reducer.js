import {weatherApiRequest} from '../api/apiRequests';
import {CHANGE_CITY, CITY_DATA, CITY_NOT_FOUND, TEMP_FAHRENHEIT, TOGGLE_TEMP, WEATHER_DATA} from './types';
import {
    changeCity,
    cityData,
    cityNotFound,
    loaderToggleFahrenheit,
    loaderToggleMain,
    tempFahrenheit,
    toggleTemp,
    weatherData
} from './actions';

export const InitialState = {
    cityName: '',
    tempFahrenheit: '',
    cityData: {},
    weatherData: [],
    cityNotFoundBool: false,
    toggleTempBool: false,
}

const weatherReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CHANGE_CITY:
            return {...state, cityName: action.payload}
        case CITY_NOT_FOUND:
            return {...state, cityNotFoundBool: action.payload}
        case CITY_DATA:
            return {...state, cityData: action.payload,}
        case WEATHER_DATA:
            return {...state, weatherData: action.payload}
        case TEMP_FAHRENHEIT:
            return {...state, tempFahrenheit: action.payload}
        case TOGGLE_TEMP:
            return {...state, toggleTempBool: action.payload}
        default:
            return state;
    }
}

export default weatherReducer;

// Thunks

export const getCityWeather = (nameCity) => {
    return async (dispatch) => {
        console.log('request');
        dispatch(loaderToggleMain(true));
        weatherApiRequest.getCityWeather(nameCity)
            .then(result => {
                console.log(result);
                if (result.cod === '404' || result.cod === '400') {
                    console.log(result.message)
                    dispatch(loaderToggleMain(false));
                    dispatch(cityNotFound(true));
                    return
                }
                dispatch(cityData(result.city));
                dispatch(weatherData(result.list));
                dispatch(changeCity(''));
                dispatch(loaderToggleMain(false));
                dispatch(toggleTemp(false));
            })
            .catch(e => {
                console.log('ERROR')
            })
    }
}

export const getFahrenheitTemp = (nameCity) => {
    return (dispatch) => {
        dispatch(loaderToggleFahrenheit(true));
        weatherApiRequest.getFahrenheitTemp(nameCity)
            .then(result => {
                dispatch(tempFahrenheit(result.list[0].main.temp));
                dispatch(toggleTemp(true));
                dispatch(loaderToggleFahrenheit(false));
            })
            .catch(e => console.log('ERROR'));
    }
}
