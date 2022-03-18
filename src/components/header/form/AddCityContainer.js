import {connect} from "react-redux";
import AddCity from "./AddCity";
import {
    changeCity,
    cityNotFound,
    getCityWeather,
    toggleActiveSuggestion,
    visibleList
} from "../../../store/weather-reducer";
import {compose} from 'redux'



const mapStateToProps = (state) => {
    return {
        cityName: state.weatherReducer.cityName,
        visibleListSearch: state.weatherReducer.visibleListSearch,
        cityNotFoundBool: state.weatherReducer.cityNotFoundBool,
        autocompleteListCities: state.weatherReducer.autocompleteListCities,
        activeSuggestion: state.weatherReducer.activeSuggestion
    }
}

export default compose(
    connect(mapStateToProps, {visibleList, cityNotFound, getCityWeather, changeCity, toggleActiveSuggestion})
)(AddCity)
