import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import weatherReducer from "./weather-reducer";
import timeReducer from "./time-reducer";


let reducers = combineReducers({
    weatherReducer,
    timeReducer
})
let store = createStore(reducers, applyMiddleware(thunk));

export default store;


