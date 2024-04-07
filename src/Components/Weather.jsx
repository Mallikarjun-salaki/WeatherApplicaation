import React, { useState } from 'react'
import './weather.css'

import Search_icon from '../Images/search.png'
import Clear_icon from '../Images/clear.png'
import Cloud_icon from '../Images/cloud.png'
import  Drizzle from '../Images/drizzle.png'
import Humidity from '../Images/humidity.png'
import Rain from '../Images/rain.png'
import Snow from '../Images/snow.png'
import Wind from '../Images/wind.png'


 const Weather = () => {

    let apiKey = "3f95cd8f5b75baea1b42dc7af12235ab"
    const [wicon,setwicon]=useState(Cloud_icon)
    const search = async()=>{
        const element = document.getElementsByClassName("cityInput")
        if(element[0].value===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`
        let response = await fetch(url)
        let data = await response.json();

        let humidity  =document.getElementsByClassName("humidity")
        let wind =document.getElementsByClassName("wind_speed")
        let temp = document.getElementsByClassName("weather_temp")
        let location = document.getElementsByClassName("weather_location")

        humidity[0].innerHTML=data.main.humidity+" %";
        wind[0].innerHTML=data.wind.speed+" km/Hr";
        temp[0].innerHTML=data.main.temp+" °C";
        location[0].innerHTML=data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n" ){
            setwicon(Clear_icon)
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"){
            setwicon(Cloud_icon)
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n"){
            setwicon(Drizzle)
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n"){
            setwicon(Drizzle)
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n"){
            setwicon(Rain)
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setwicon(Rain)
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setwicon(Snow)
        }
    }

  return (
    <div className='Container'>

        <div  className='Top_bar'>
            <input type="text" className='cityInput' placeholder='Search'></input>
            <div className='search_icon' onkeydown={()=>search()} onClick={()=>search()}>
                <img src={Search_icon} alt='Loading'></img>
            </div>
        </div>
        <div className='weather_image'>
            <img src={wicon} alt='Loading'></img>
        </div>
        <div className='weather_temp'>55.89 °C</div>
        <div className='weather_location'>Gulbarga</div>
        <div className='data_container'>
            <div className='element'>
                <img src={Humidity}></img>
                <div className='data'>
                    <div className='humidity'>48.08 %</div>
                </div>
            </div>
            <div className='element'>
                <img src={Wind}></img>
                <div className='data'>
                    <div className='wind_speed'> 15.89 km/Hr</div>
                </div>
            </div>
        </div>        

    </div>
  )
}

export default Weather