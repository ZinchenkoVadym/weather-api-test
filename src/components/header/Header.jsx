import React from 'react';
import './../../App.css';
import './Header.css';
import AddCityContainer from './form/AddCityContainer';

const Header = () => {
    return (
        <header className='header'>
            <div className='container header__container'>
                <h1>Weather</h1>
                <AddCityContainer/>
            </div>
        </header>
    );
};

export default Header;