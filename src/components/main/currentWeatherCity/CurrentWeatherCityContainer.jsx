import {connect} from 'react-redux';
import CurrentWeatherCity from './CurrentWeatherCity';
import {getFahrenheitTemp} from '../../../store/weather-reducer';
import {compose} from 'redux';
import {toggleTemp} from '../../../store/actions';


const mapStateToProps = state => ({
    tempFahrenheit: state.weather.tempFahrenheit,
    toggleTempBool: state.weather.toggleTempBool,
    loaderFahrenheit: state.loader.loaderFahrenheit
})


export default compose(connect(mapStateToProps, {getFahrenheitTemp, toggleTemp}))(CurrentWeatherCity);


