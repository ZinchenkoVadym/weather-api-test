import {connect} from 'react-redux';
import AddCity from './AddCity';
import {getCityWeather} from '../../../store/weather-reducer';
import {compose} from 'redux';
import {
  changeCity,
  cityNotFound,
  loaderToggleMain,
} from '../../../store/actions';

const mapStateToProps = (state) => ({
  cityName: state.weather.cityName,
  cityNotFoundBool: state.weather.cityNotFoundBool,
  loaderMain: state.loader.loaderMain,
});

export default compose(connect(mapStateToProps, {
  cityNotFound,
  getCityWeather,
  changeCity,
  loaderToggleMain,
}))(AddCity);
