import {connect} from "react-redux";
import AddCity from "./AddCity";
import {
    changeCity,
    cityNotFound,
    getCityWeather, getCityWeatherGeolocation,
    loaderToggleMain,
} from "../../../store/weather-reducer";
import {compose} from 'redux'

const mapStateToProps = (state) => {
    return {
        cityName: state.weatherReducer.cityName,
        cityNotFoundBool: state.weatherReducer.cityNotFoundBool,
        loaderMain: state.weatherReducer.loaderMain
    }
}

export default compose(
    connect(mapStateToProps, {cityNotFound, getCityWeather, changeCity, loaderToggleMain})
)(AddCity)
