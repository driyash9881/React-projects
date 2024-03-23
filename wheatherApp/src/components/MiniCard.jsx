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


const MiniCard = ({
  time,
  temp,
  iconstring }
) => {
  const [icon , setIcon ] = useState('')
  useEffect(()=>{
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
  },[iconstring])

  return (
<div className='glasscard w-[10rem] h-[10rem] flex flex-col p-4 '>
 {/* <div className=' text-xl font-semibold text-center justify-center mt-5'>
   {new Date(time).toLocaleTimeString('en' , {weekday:'long'}).split(" ")[0]}
 </div> */}
 <hr className='bg-slate-800' />
  <div className=' text-slate-700 flex flex-col gap-5 justify-center item-center mt-4 '>
    <img src={icon} alt="cloud_png" className=' w-[55%] items-center ml-6' />
    <p className=' font-semibold text-center'>{temp} deg.C</p>
  </div>
</div>
  )
}

export default MiniCard