import { createContext ,useEffect,useState,useContext } from "react";
import axios from "axios";

const StateContext = createContext()

export const StateContextProvider = ({children})=>{
    const [weather, setweather] = useState("")
    const [values, setValues] = useState("")
    const [place, setPlace] = useState("jaipur")
    const [thisLocation, setLocation] = useState("")


    // fetch api
    const fetchWeather = async()=>{
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
              aggregateHours: '24',
              location: place ,
              contentType: 'json',
              unitGroup: 'metric',
              shortColumnNames: '0'
            },
            headers: {
              'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
              'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              const thisData = Object.values(response.data.locations
              )[0];
              console.log(thisData)
              console.log(thisData.values[0])
             setLocation(thisData.address)
             setValues(thisData.values)
             setweather(thisData.values[0])
          } catch (error) {
            console.log("The error is : " + error)  ;
          }
    }

    useEffect(()=>{
      fetchWeather()
    },[place])

    useEffect(()=>{
     //console.log(values)
    },[values])
    
    return(      
    <StateContext.Provider value={{thisLocation,weather,place,values , setPlace}}>
        {children}
      </StateContext.Provider>

    )
}
export const setStateContext= () => useContext(StateContext) 

