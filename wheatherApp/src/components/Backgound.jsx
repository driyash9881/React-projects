import { useState ,useEffect } from 'react'
import React  from 'react'
import clear from '../assets/images/Clear.jpg'
import cloudy from '../assets/images/Cloudy.jpg'
import fog from '../assets/images/fog.png'
import rainy from '../assets/images/Rainy.jpg'
import snow from '../assets/images/snow.jpg'
import stormy from '../assets/images/Stormy.jpg'
import  sunny from '../assets/images/Sunny.jpg'
import {setStateContext} from '../context/index'

const Backgound = () => {
 const [image, setImage] = useState('clear')
 const {weather} = setStateContext(``) 
 useEffect(()=>{
 if(weather.conditions){
  let data = weather.conditions;
  if(data.toLowerCase().includes("clear")){
    setImage(clear)
  }
  else if (data.toLowerCase().includes('cloudy')){
    setImage(cloudy)
  }
  else if (data.toLowerCase().includes('snow')){
    setImage(snow)
  }
  else if (data.toLowerCase().includes('thunder') || data.toLowerCase().includes('storm')){
    setImage(stormy)
  }
  else if (data.toLowerCase().includes('rain') || data.toLowerCase().includes('shower') ){
    setImage(rainy)
  }
  else if (data.toLowerCase().includes('fog')){
    setImage(fog)
  }
  else if (data.toLowerCase().includes('sunny')){
    setImage(sunny)
  }
  
 }

 },[weather.conditions])


  return (
   <img src={image} alt="weather_image" className='w-full h-screen fixed top-0 bottom-0 -z-10' />
  )
}

export default Backgound