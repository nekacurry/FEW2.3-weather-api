import {useState} from 'react';
import './Weather.css'

function Weather() {
  const [zip, setZip] = useState('60647')

  return (
    <div className="Weather">
      <form>
        <input 
          placeholder="Enter ZIP Code"
          value={zip}
          onChange={e => setZip(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Weather