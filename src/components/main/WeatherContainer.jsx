import {connect} from 'react-redux';
import {compose} from 'redux';
import Weather from "./Weather";
import {getCityWeather} from '../../store/weather-reducer';

const mapStateToProps = state => ({
        cityData: state.weather.cityData,
        weatherData: state.weather.weatherData,
        loaderMain: state.loader.loaderMain
    })

export default compose(connect(mapStateToProps,{getCityWeather}))(Weather);

