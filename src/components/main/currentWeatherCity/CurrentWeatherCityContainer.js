import {connect} from "react-redux";
import CurrentWeatherCity from "./CurrentWeatherCity";
import {getFahrenheitTemp, toggleTemp} from "../../../store/weather-reducer";
import {compose} from 'redux'


const mapStateToProps = (state) => {
    return {
        tempFahrenheit: state.weatherReducer.tempFahrenheit,
        toggleTempBool: state.weatherReducer.toggleTempBool,
        loaderFahrenheit: state.weatherReducer.loaderFahrenheit
    }
}

export default compose(
    connect(mapStateToProps, {getFahrenheitTemp, toggleTemp})
)(CurrentWeatherCity)


