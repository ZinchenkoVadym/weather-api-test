import React from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import WeatherContainer from './components/main/WeatherContainer';
import {cityNotFound} from './store/actions';

const App = () => {
  const dispatch = useDispatch();
  return (
    <div className='App'
      onClick={() => dispatch(cityNotFound(false))}
    >
      <Header/>
      <WeatherContainer/>
      <Footer/>
    </div>
  );
};

export default App;
