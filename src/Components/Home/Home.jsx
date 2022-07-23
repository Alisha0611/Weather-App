import React, {useEffect , useState} from 'react'
import './Home.css'
import axios from 'axios'

const Home = () => {
const [apiData, setApiData] = useState(null)
const [location, setLocation] = useState('')

const searchLocation = (e) => {
  e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1660dfd08edf49570a363ca5b6831fbc&units=metric`)
    .then((getData) => {
      setApiData(getData?.data);
      console.log(getData?.data);
  }).catch(() => {
    setApiData(null);
    alert('Enter valid location.');
  })
  setLocation('')
}

  return (
    <div className='h'>
      <div className="h-head">Weather check !!</div>
        <div className="h-search">
          <form className='h-form'>
            <input 
            value={location}
            onChange = { (e) => {setLocation(e.target.value)}}
            type="text" 
            placeholder='Search'/>

            <button type='submit'
            onClick={searchLocation}
            className="h-button fa fa-search">
            </button>
          </form>
        </div>
        {apiData ? 
          
            <div className="h-card">
            <p className='h-city'>{apiData?.name},{apiData?.sys?.country}</p>
            <p className='h-temp'>{Math.round(apiData?.main?.temp)}°C</p>
            <p className='h-weather'>{apiData?.weather[0]?.description}</p>
          </div>
          
           : null}
       
    </div>
  )
}

export default Home
