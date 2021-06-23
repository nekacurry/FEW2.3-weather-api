import {useState} from 'react';
import './Weather.css'

function Weather() {
  const [zip, setZip] = useState('')
  const [unit, setUnit] = useState('')

  return (
    <div className="Weather">
      <form>
        <div>
          <input 
            placeholder="Enter ZIP Code"
            value={zip}
            onChange={e => setZip(e.target.value)}/>

          <button>Submit</button>
        </div>

        <select onChange={e => setUnit(e.target.value)}>
          <option value='metric'>Celcius</option>
          <option value='imperial'>Fahrenheit</option>
          <option value='standard'>Kelvin</option>
        </select>
      </form>
    </div>
  )
}

export default Weather