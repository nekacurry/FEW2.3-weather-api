import {useState} from 'react';
import './Weather.css'
import RadioButton from '../RadioButton';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

function Weather() {
  const [zip, setZip] = useState('')
  const [unit, setUnit] = useState('')
  const [data, setData] = useState(null)

  // ------------------------------
  async function fetchWeather() {
    const apikey = 'ded2931ab0bcfe4f0f974e3830fccae7'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`
    const res = await fetch(path)
    const json = await res.json()

    const temp = json.main.temp
    const feelsLike = json.main.feels_like
    const description = json.weather[0].description

    setData({
      temp,
      feelsLike,
      description,
    })
  }
  // ------------------------------

  return (
    <div className="Weather">
      {data && <WeatherDisplay {...data} />}
      <form onSubmit={e => {
        e.preventDefault()
        fetchWeather()
      }}>
        <div>
          <input 
            placeholder="Enter ZIP Code"
            value={zip}
            onChange={e => setZip(e.target.value)}/>

          <button type="submit">Submit</button>
        </div>

        <select 
          value={unit}
          onChange={e => setUnit(e.target.value)}
        >
          <option value='metric'>Celcius</option>
          <option value='imperial'>Fahrenheit</option>
          <option value='standard'>Kelvin</option>
        </select>

        <RadioButton 
          label="metric"
          name="unit"
          checked={unit === "metric"}
          onChange={() => setUnit('metric')}
        />

        <RadioButton 
          label="imperial"
          name="unit"
          checked={unit === "imperial"}
          onChange={() => setUnit('imperial')}
        />

        <RadioButton 
          label="standard"
          name="unit"
          checked={unit === "standard"}
          onChange={() => setUnit('standard')}
        />


      </form>
    </div>
  )
}

export default Weather