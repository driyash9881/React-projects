import React from 'react'
import { useEffect,useState } from 'react'
// import usedate from '../utils/usedate'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import sun from '../assets/icons/sun.png'
import windy from '../assets/icons/windy.png'



const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  iconstring,
  heatIndex,
  conditions
}) => {
  const [icon, setIcon] = useState("")
  // const { time } = usedate()
  useEffect(()=>{
    if(iconstring){
    if(iconstring.toLowerCase().includes('clear')){
      setIcon(sun)
    }
    else if(iconstring.toLowerCase().includes('rain') || iconstring.toLowerCase().includes('shower') ){
      setIcon(rain)
    }
    else if(iconstring.toLowerCase().includes('fog')){
      setIcon(fog)
    }
    else if(iconstring.toLowerCase().includes('snow')){
      setIcon(snow)
    }
    else if(iconstring.toLowerCase().includes('windy')){
      setIcon(windy)
    }
    else if(iconstring.toLowerCase().includes('cloud')){
      setIcon(cloud)
    }
    else if(iconstring.toLowerCase().includes('thunder') || iconstring.toLowerCase().includes('storm')){
      setIcon(storm)
    }
  }
 },[iconstring])

  return (
  <>
  <div className='w-[55rem] min-w-[50rem] h-[30rem] glasscard'>
   <div className='flex justify-center gap-10 mt-12 mb-4'>
   <img src={icon} alt="weather_icon" />
   <p className='text-5xl font-bold text-center text-slate-50 mt-6'>{temperature}&deg;C</p>
   </div>
   <div className='text-3xl text-center font-semibold text-slate-600'>
    {place}
   </div>
   {/* <div className='flex gap-10 justify-center items-center mt-4'>
    <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
    <p className='flex-1 text-center p-2'>{time}</p>
   </div> */}
   <div className='flex w-[70%] gap-4 justify-center ml-32  items-center mt-4 '>
    <p className='flex-1 bold rounded-lg bold text-xl text-center p-2 text-slate-100 bg-blue-600'>
      Wind Speed <p className='text-lg font-light'>{windspeed} Km/hr</p>
    </p>
    <p className='flex-1 p-1 rounded-lg bold text-xl text-center text-slate-50 bg-green-500'>
      Humidity<p className='text-slate-50 text-lg font-light'>{humidity} gm/m <sup>3</sup></p>
    </p>
   </div>
   <div className='w-full px-7 text-xl text-slate-100 py-5 mt-4 flex justify-between items-center'>
    <p className='font-semibold '>Heat Index </p> <p className='font-semibold'>{heatIndex ? heatIndex:"NAN"}</p> 
   </div>
   <hr  className='bg-slate-600'/>
   <div className='p-4 mt-4 w-full text-slate-50  justify-between items-center text-center font-semibold text-2xl'>{conditions}</div>
  </div>
  </>
  )
}

export default WeatherCard