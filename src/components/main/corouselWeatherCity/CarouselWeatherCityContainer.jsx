import {connect} from 'react-redux';
import {compose} from 'redux';
import CarouselWeatherCity from './CarouselWeatherCity';

const mapStateToProps = (state) => ({carouselData: state.weather.weatherData});

export default compose(connect(mapStateToProps, null))(CarouselWeatherCity);

