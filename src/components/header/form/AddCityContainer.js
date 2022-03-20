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

const AddCityLogic = (props) => {



    const keyDownNavigateList = (e) => {
        let activeCity = props.autocompleteListCities[props.activeSuggestion]
        if (props.cityName !== '') {
            switch (e.keyCode) {
                case 13: {
                    props.changeCity(activeCity || props.cityName)
                    props.toggleActiveSuggestion(-1)
                    break
                }
                case 38: {
                    if (props.activeSuggestion !== 0) {
                        props.toggleActiveSuggestion(props.activeSuggestion - 1)
                    }
                    break
                }
                case 40: {
                    if (props.autocompleteListCities.length - 1 !== props.activeSuggestion) {
                        props.toggleActiveSuggestion(props.activeSuggestion + 1)
                        console.log('1', props.autocompleteListCities)
                        console.log(props.activeSuggestion)
                    }
                    break
                }
                default: {
                    return null
                }
            }
        }
    }

    return (
        <AddCity  {...props} keyDownNavigateList={keyDownNavigateList}/>
        )
}

export default compose(
    connect(mapStateToProps, {visibleList, cityNotFound, getCityWeather, changeCity, toggleActiveSuggestion})
)(AddCityLogic)
