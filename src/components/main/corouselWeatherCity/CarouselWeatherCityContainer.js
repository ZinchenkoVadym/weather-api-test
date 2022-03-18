import {connect} from "react-redux";
import {compose} from 'redux'
import CarouselWeatherCity from "./CarouselWeatherCity";

const mapStateToProps = (state) => {
    return {
        carouselData: state.weatherReducer.weatherData
    }
}

export default compose(
    connect(mapStateToProps, {})
)(CarouselWeatherCity)

