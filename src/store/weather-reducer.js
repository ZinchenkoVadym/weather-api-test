import {weatherApiRequest} from "../api/apiRequests";

const CHANGE_CITY = 'CHANGE_CITY';
const CITY_NOT_FOUND = 'CITY_NOT_FOUND';
const CITY_DATA = 'CITY_DATA';
const WEATHER_RESULT = 'WEATHER_RESULT';
const VISIBLE_LIST_SEARCH = 'VISIBLE_LIST_SEARCH';
const TEMP_FAHRENHEIT = 'TEMP_FAHRENHEIT';
const TOGGLE_TEMP = 'TOGGLE_TEMP';
const TOGGLE_LOADER_FAHRENHEIT = 'TOGGLE_LOADER_FAHRENHEIT';
const TOGGLE_LOADER_MAIN = 'TOGGLE_LOADER_MAIN';
const TOGGLE_ACTIVE_SUGGESTION = 'TOGGLE_ACTIVE_SUGGESTION';

let InitialState = {
    visibleListSearch: false,
    cityName: '',
    cityNotFoundBool: false,
    cityData: {},
    weatherData: [],
    autocompleteListCities: [],
    tempFahrenheit: "",
    toggleTempBool: false,
    loaderFahrenheit: false,
    loaderMain: false,
    activeSuggestion: 0,
}

const weatherReducer = (state = InitialState, action) => {
    switch (action.type) {
        case CHANGE_CITY: {
            return {
                ...state,
                cityName: action.payload,
                autocompleteListCities: JSON.parse(localStorage.getItem('cities')).filter((city) => {
                    return city.toLowerCase().includes(action.payload.toLowerCase())
                })
            }
        }
        case CITY_NOT_FOUND: {
            return {
                ...state,
                cityNotFoundBool: action.payload
            }
        }
        case CITY_DATA: {
            return {
                ...state,
                cityData: action.payload,
            }
        }
        case WEATHER_RESULT: {
            return  {
                ...state,
                weatherData: action.payload
            }
        }
        case VISIBLE_LIST_SEARCH: {
            return  {
                ...state,
                visibleListSearch: action.payload
            }
        }
        case TEMP_FAHRENHEIT: {
            return {
                ...state,
                tempFahrenheit: action.payload

            }
        }
        case TOGGLE_TEMP: {
            return  {
                ...state,
                toggleTempBool: action.payload
            }
        }
        case TOGGLE_LOADER_FAHRENHEIT: {
            return {
                ...state,
                loaderFahrenheit: action.payload
            }
        }
        case TOGGLE_LOADER_MAIN: {
            return {
                ...state,
                loaderMain: action.payload
            }
        }
        case TOGGLE_ACTIVE_SUGGESTION: {
            return {
                ...state,
                activeSuggestion: action.payload
            }
        }
        default:
            return state
    }
}

export default weatherReducer;

export const cityNotFound = (bool) => {
    return {
        type: CITY_NOT_FOUND,
        payload: bool
    }
}

export const changeCity = (cityName) => {
    return {
        type: CHANGE_CITY,
        payload: cityName
    }
}

export const cityData = (cityData) => {
    return {
        type: CITY_DATA,
        payload: cityData
    }
}

export const weatherData = (weatherData) => {
    return {
        type: WEATHER_RESULT,
        payload: weatherData
    }
}

export const visibleList = (bool) => {
    return {
        type: VISIBLE_LIST_SEARCH,
        payload: bool
    }
}

export const tempFahrenheit = (temp) => {
    return {
        type: TEMP_FAHRENHEIT,
        payload: temp
    }
}

export const toggleTemp = (bool) => {
    return {
        type: TOGGLE_TEMP,
        payload: bool
    }
}

export const loaderToggleFahrenheit = (bool) => {
    return {
        type: TOGGLE_LOADER_FAHRENHEIT,
        payload: bool
    }
}

export const loaderToggleMain = (bool) => {
    return {
        type: TOGGLE_LOADER_MAIN,
        payload: bool
    }
}

export const toggleActiveSuggestion = (num) => {
    return {
        type: TOGGLE_ACTIVE_SUGGESTION,
        payload: num
    }
}

// Thunks

export const getCityWeather = (nameCity) => {
    return (dispatch) => {
        dispatch(loaderToggleMain(true))
        weatherApiRequest.getCityWeather(nameCity)
            .then(result => {
                if (result.cod === '404') {
                  throw new Error('message')
                }
                dispatch(cityData(result.city))
                dispatch(weatherData(result.list))
                let arr = JSON.parse(localStorage.getItem('cities')) || [];
                let name = nameCity[0].toUpperCase() + nameCity.substring(1).toLowerCase()
                if (!arr.includes(name)) {
                    arr.push(name)
                }
                localStorage.setItem('cities', JSON.stringify(arr));
                dispatch(visibleList(false))
                dispatch(changeCity(''))
                dispatch(loaderToggleMain(false))
                dispatch(toggleTemp(false))
                sessionStorage.setItem('city', JSON.stringify(name))
            })
            .catch(e => {
                dispatch(loaderToggleMain(false))
                dispatch(cityNotFound(true))
                }
            )
    }
}

export const getFahrenheitTemp = (nameCity) =>  {
    return (dispatch) => {
        dispatch(loaderToggleFahrenheit(true))
        weatherApiRequest.getFahrenheitTemp(nameCity)
            .then(result => {
               dispatch(tempFahrenheit(result.list[0].main.temp))
                dispatch(toggleTemp(true))
                dispatch(loaderToggleFahrenheit(false))
            })
            .catch(e => console.log('ERROR'))
    }
}
