import React, {createRef} from 'react';
import './../../../App.css'
import './AddCity.css'

const AddCity = (props) => {


    window.onclick = function (e) {
        props.visibleList(false)
        props.cityNotFound(false)
    }


    return (
            <div className='form__add-city'>

                    <h2 className={`not_found${props.cityNotFoundBool ? ' active' : ''}`}>City not found</h2>

                <svg
                    onClick={() => {props.getCityWeather(JSON.parse(sessionStorage.getItem('city')))}}
                    className='svg_refresh'
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="rgba(15,58,83,0.62)" d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/>
                </svg
                >


                <form onSubmit={(e) => {
                    e.preventDefault()
                    props.visibleList(false)
                    props.getCityWeather(props.cityName)
                }}>
                    <input
                        ref={createRef}
                        onKeyDown={(e) => props.keyDownNavigateList(e)}
                        placeholder='Write city...'
                        type='text'
                        onChange={(e) => {
                            if (!localStorage.getItem('cities')) localStorage.setItem('cities', JSON.stringify([]))
                            props.cityNotFound(false)
                            props.changeCity(e.target.value)
                            props.visibleList(true)
                            props.toggleActiveSuggestion(-1)
                        }}
                        value={props.cityName}
                        required
                    />
                    {props.visibleListSearch && props.cityName && props.autocompleteListCities.length
                        ? <ul className='autocomplete'>
                            {props.cityName && props.autocompleteListCities.map((cities, index) => {
                                console.log(props.activeSuggestion)
                                let className = 'autocomplete_item';
                                if (index === props.activeSuggestion) className = 'autocomplete_item active'
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
    onClick={() => {
        fetch(`https://nominatim.openstreetmap.org/search?K`)
            .then((response => console.log(response)))
    }}
                    >Search
                    </button>
                </form>
            </div>
    );
};

export default AddCity;