import {TOGGLE_LOADER_FAHRENHEIT, TOGGLE_LOADER_MAIN} from './types';

let InitialState = {
    loaderFahrenheit: false,
    loaderMain: false,
}

const loaderReducer = (state = InitialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADER_FAHRENHEIT:
            return {...state, loaderFahrenheit: action.payload}
        case TOGGLE_LOADER_MAIN:
            return {...state, loaderMain: action.payload}
        default:
            return state
    }
}

export default loaderReducer;