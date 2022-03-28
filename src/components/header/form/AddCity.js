import React, {useRef, useEffect} from 'react';
import './../../../App.css'
import './AddCity.css'
import {handleScriptLoad, loadScript} from "../../../autocompleted/SearchLocationInput";
import {Circles} from "react-loader-spinner";

const AddCity = (props) => {

    const KEY = 'AIzaSyBp-SEtW27t7ri7nVAcrkns-mPBxSWeWbQ&libraries';

    window.onclick = (e) => props.cityNotFound(false)
    const autoCompleteRef = useRef();
    useEffect(() => {
        loadScript(
            `https://maps.googleapis.com/maps/api/js?language=en&key=${KEY}=places`,
            () => handleScriptLoad(props.changeCity, autoCompleteRef)
        )
    }, []);

    return (
        <div className='form__add-city'>
            <h2 className={`not_found${props.cityNotFoundBool ? ' active' : ''}`}>City not found</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.getCityWeather(props.cityName)
            }}>
                <input
                    ref={autoCompleteRef}
                    placeholder='Write city...'
                    type='text'
                    onChange={(e) => {
                        props.cityNotFound(false)
                        props.changeCity(e.target.value)
                        console.log(props.cityName)
                    }}
                    value={props.cityName}
                    required
                />
                <button type='submit'
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default AddCity;







{/*{!props.loaderMain ? <svg*/}
{/*    className='svg_refresh'*/}
{/*    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">*/}
{/*    <path fill="rgba(15,58,83,0.62)"*/}
{/*          d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h-3.025l5 6.625 5-6.625h-2.975c.257-3.351 3.06-6 6.475-6 3.584 0 6.5 2.916 6.5 6.5s-2.916 6.5-6.5 6.5c-1.863 0-3.542-.793-4.728-2.053l-2.427 3.216c1.877 1.754 4.389 2.837 7.155 2.837 5.79 0 10.5-4.71 10.5-10.5s-4.71-10.5-10.5-10.5z"/>*/}
{/*</svg> : <Circles/>}*/}