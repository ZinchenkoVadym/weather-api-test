import {connect} from "react-redux";
import {compose} from "redux";
import Weather from "./Weather";
import {getCityWeather} from "../../store/weather-reducer";


const mapStateToProps = (state) =>{
    return {
        cityData: state.weatherReducer.cityData,
        weatherData: state.weatherReducer.weatherData,
        loaderMain: state.weatherReducer.loaderMain
    }
}

export default compose(
    connect(mapStateToProps,{getCityWeather})
)(Weather)

