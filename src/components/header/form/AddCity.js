import React from 'react';
import './../../../App.css'
import './AddCity.css'

const AddCity = (props) => {

    return (
        <>
            <div className='form__add-city'>
                {props.cityNotFoundBool
                    ? <h2>City not found</h2>
                    : null}
                <svg
                    onClick={() => {
                        props.getCityWeather(JSON.parse(sessionStorage.getItem('city')))
                    }}
                    className='svg_refresh' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="rgba(15,58,83,0.62)" d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/></svg>

                <form onSubmit={(e) => {
                    e.preventDefault()
                    props.visibleList(false)
                    props.getCityWeather(props.cityName)

                }}>
                    <input
                        onKeyDown={(e) => {
                            let activeCity = props.autocompleteListCities[props.activeSuggestion]
                            if (props.cityName !== '') {
                                switch (e.keyCode) {
                                    case 13: {
                                        props.changeCity(activeCity || props.cityName)
                                        props.toggleActiveSuggestion(0)
                                        break
                                    }
                                    case 38: {
                                        if (props.activeSuggestion !== 0) {
                                            props.toggleActiveSuggestion(props.activeSuggestion - 1)
                                        }
                                        break
                                    }
                                    case 40: {
                                        if (props.autocompleteListCities.length - 1) {
                                            props.toggleActiveSuggestion(props.activeSuggestion + 1)
                                        }
                                        break
                                    }
                                    default: {
                                        return null
                                    }
                                }
                            }
                            console.log(activeCity)
                            console.log(props.activeSuggestion)

                        }}
                        placeholder='Write city...'
                        type='text'
                        onChange={(e) => {
                            if (!localStorage.getItem('cities')) {
                                localStorage.setItem('cities', JSON.stringify([]))
                            }
                            props.cityNotFound(false)
                            props.changeCity(e.target.value)
                            props.visibleList(true)
                            props.toggleActiveSuggestion(0)
                        }}
                        value={props.cityName}
                        required
                    />
                    {props.visibleListSearch && props.cityName && props.autocompleteListCities.length
                        ? <ul className='autocomplete'>
                            {props.cityName && props.autocompleteListCities.map((cities, index) => {
                                let className = 'autocomplete_item';
                                if (index === props.activeSuggestion) {
                                    className = 'autocomplete_item active'
                                }
                                return <li
                                    key={cities}
                                    className={className}
                                    onClick={() => {
                                        props.changeCity(cities)
                                        props.visibleList(false)
                                    }
                                    }
                                >{cities}</li>
                            })}
                        </ul>
                        : null
                    }
                    <button type='submit'
                    >Search
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddCity;