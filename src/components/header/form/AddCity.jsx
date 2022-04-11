import './../../../App.css'
import './AddCity.css'

const AddCity = (props) => {

    window.onclick = (e) => props.cityNotFound(false)

    return (
        <div className='form__add-city'>
            <h2 className={`not_found${props.cityNotFoundBool ? ' active' : ''}`}>City not found</h2>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.getCityWeather(props.cityName)
            }}>
                <input
                    placeholder='City name...'
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