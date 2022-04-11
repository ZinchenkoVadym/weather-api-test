import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import weatherReducer from './weather-reducer';
import loaderReducer from './loader-reducer';


let reducers = combineReducers({
    weather: weatherReducer,
    loader: loaderReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;


