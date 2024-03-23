import { useState } from 'react'
import search from './assets/icons/search.svg'
import './App.css'
import {setStateContext} from './context/index'
import Backgound from './components/Backgound'
import WeatherCard from './components/WeatherCard'
import MiniCard from './components/MiniCard'

function App() {
  const [textinput, setTextInput] = useState("")
  const {weather , thisLocation , values , place , setPlace } = setStateContext()
  
  const setInput=()=>{
    setPlace(textinput)
    textinput(" ")
  }

  return (
    <>
    <Backgound></Backgound>
    <div className='w-full w-min-[55rem] h-screen'>
      <nav className='flex flex-1 gap-[70%]'>
      <h1 className=' font-extrabold text-3xl 
    justify-start ml-5 flex mt-5  text-blue-500'>Weather App</h1> 
    <div className="search flex">
    <img src={search} alt="search" className='w-6 h-10 z-10 mt-5 ml-2  absolute'/>
    <input onKeyUp={(e)=>{
      if(e.key === "Enter") {
        setInput()
      }
    }
  } 
  type='text' className=' relative p-2 border focus:border-none text-lg bg-slate-50 border-slate-500 w-[90%] mt-5 px-10 rounded-3xl h-10' placeholder='Search'
    value={textinput}
    onChange={(e)=>setTextInput(e.target.value)}/>
    </div>
     </nav>
 <h1 className='text-white '>{textinput}</h1>
  

   <main className='flex flex-wrap w-full gap-20 py-10 px-[10%]'>
   
    <WeatherCard
    temperature = {weather.temp} 
    windspeed = {weather.wspd}  
    humidity = {weather.humidity}   
    place = {thisLocation}   
    iconstring={weather.conditions}   
    heatIndex = {weather.heatindex}   
    conditions = {weather.conditions}
     />

{values && values.filter((value, index) => index > 0 && index < 7).map((curr) => {
  return <MiniCard key={curr.index} temp={curr.temp} iconstring={weather.conditions} />;
})}
   
   </main>
   </div>
    </>

  )
}

export default App
