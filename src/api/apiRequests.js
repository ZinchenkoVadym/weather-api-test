export const weatherApiRequest = {
    async getCityWeather(nameCity) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&units=metric&lang=en&appid=cb9bac65bb52d1c4494bb8d50975406b`)
        return await response.json()
    },

    async getFahrenheitTemp(nameCity) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&units=imperial&lang=en&appid=cb9bac65bb52d1c4494bb8d50975406b`)
        return await response.json()
    },
    async getCityWeatherGeolocation(lat, lon) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=cb9bac65bb52d1c4494bb8d50975406b&lang=en&units=metric`)
        return await response.json()
    }
}

