import React from 'react';
import './../../../App.css';
import './AddCity.scss';
import PropTypes from 'prop-types';

const AddCity = (props) => {
  return (
    <div className='form__add-city'>
      <h2 className={`not_found  ${props.cityNotFoundBool ? ' active' : ''}`}>
        City not found
      </h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.getCityWeather(props.cityName);
      }}>
        <input
          placeholder='City name...'
          type='text'
          onChange={(e) => {
            props.cityNotFound(false);
            props.changeCity(e.target.value);
            console.log(props.cityName);
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
};

AddCity.propTypes = {
  cityNotFoundBool: PropTypes.bool,
  cityName: PropTypes.string,
  getCityWeather: PropTypes.func,
  cityNotFound: PropTypes.func,
  changeCity: PropTypes.func,
};

export default AddCity;
