import React, {useEffect, useRef} from 'react';
import './../../../App.css';
import './AddCity.scss';
import PropTypes from 'prop-types';

const AddCity = (props) => {
  let autoComplete;

  const loadScript = (url, callback) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    console.log('loadScript');
    if (script.readyState) {
      script.onreadystatechange = function() {
        // eslint-disable-next-line max-len
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  const handleScriptLoad = (changeCity, autoCompleteRef) => {
    autoComplete = new window.google.maps.places.Autocomplete(
        autoCompleteRef.current,
        {types: ['(cities)'], componentRestrictions: {country: 'ua'}},
    );
    autoComplete.addListener('place_changed', () => {
      const addressObject = autoComplete.getPlace();
      const query = addressObject.formatted_address;
      props.changeCity(query);
      if (query !== undefined) {
        props.getCityWeather(query);
      } else {
        props.getCityWeather(autoCompleteRef.current.value);
      }
    },
    );
  };
  const KEY = 'AIzaSyBp-SEtW27t7ri7nVAcrkns-mPBxSWeWbQ&libraries';

  const autoCompleteRef = useRef();

  useEffect(() => {
    loadScript(
        `https://maps.googleapis.com/maps/api/js?language=en&key=${KEY}=places`,
        () => handleScriptLoad(props.changeCity, autoCompleteRef),
    );
  }, []);

  return (
    <div className='form__add-city'>
      <h2 className={`not_found  ${props.cityNotFoundBool ? ' active' : ''}`}>
        City not found
      </h2>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input
          ref={autoCompleteRef}
          placeholder='City name...'
          type='text'
          onKeyPress={(e) => e.key === 'Enter' && e.preventDefault()}
          onChange={(e) => {
            props.cityNotFound(false);
            props.changeCity(e.target.value);
          }}
          value={props.cityName}
          required
        />
        <button type='submit'
          onClick={() => props.getCityWeather(autoCompleteRef.current.value)}
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
