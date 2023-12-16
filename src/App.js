import React,{useState} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faGithub} from "@fortawesome/free-brands-svg-icons";
export default function App() {
  const [data,setData] = useState({})
  const [location , setLocation] = useState('')
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5d99b9188d1f28eb0b38e5d02a7d2fae&units=metric`
  const searchLocation = (event) => {
    if(event.key === 'Enter'){
    axios.get(url).then((response) => {
     setData(response.data) 
     console.log(response.data)

    })
    setLocation('')
    axios.get(url).then((response) => {
      setData(response.data);
    }).catch((error) => {
      alert(error.response.data.message)
    })    

    }
  } 
  return (
  <div className="app"> 
    <p>SkySnap</p>
  

    <div className="social_container" >
      <a href="https://github.com/Deepak-3012" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faGithub} size= "2x"/>
      </a>
      
    
    </div>
   
    
    
    
    <div className="search">
      <input
      value={location}
      onChange={event => setLocation(event.target.value)}
      onKeyDown= {searchLocation} 
      placeholder ="eg: Chennai"
      type="text"/>
    </div>
    <div className="container">
    <div className="top">
     
        <div className="location">
        <p>{data.name}</p>

        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp}°C</h1> : null}
      
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
       
        </div>
        </div>
        </div>

{data.name !== undefined &&
       
        <div className="bottom">
        <div className="humidity">
          {data.weather ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>humidity</p>
          </div>
          <div className="feels">
          {data.weather ? <p className='bold'>{data.main.feels_like}°C</p> : null}
          
            <p>feels like</p>
          </div>
         
          <div className="wind">
          {data.weather ? <p className='bold'>{data.sys.country}</p> : null}
          <p>Country</p>
          </div>
      
    </div>
    }
    </div>
 
  )
}