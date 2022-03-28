import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import WeatherContainer from "./components/main/WeatherContainer";


function App() {
    return (
        <div className="App">
            <Header/>

                <WeatherContainer/>
            <Footer/>
        </div>
    );
}

export default App;
