import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numberAllow, setNumberAllow] = useState(false)
  const [characterAllow, setCharacterAllow] = useState(false)
  const [length, setLength] = useState(6)
  const [password, setPassword] = useState([])
 const selectPass = useRef(null);

  const passwordGenrator = useCallback(()=>{
   
   let pass = " "
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

   if(numberAllow) str+="1234567890"
   if(characterAllow) str+="!@#$%^&*()"

   for (let i = 1; i <= length; i++) {
    let passvar = Math.floor(Math.random() * str.length + 1 )
    pass += str.charAt(passvar) 
    console.log(pass)
   }
   setPassword(pass)
  },[setPassword,numberAllow,characterAllow,length])

useEffect(()=>{
  passwordGenrator()
},
[passwordGenrator,numberAllow,characterAllow,setLength])
const copyHandler =()=>{
  navigator.clipboard.writeText(password)
  selectPass.current.select();
  selectPass.current.focus();
}
  return (
    <>
  <h1>Password Generator</h1>
<div>
  <input type="text"
  value={password}
  ref={selectPass}
  onChange={(e)=>setPassword(e.target.value)}
  placeholder='Password'/>

  
  </div>
  <button onClick={()=>copyHandler()}>Copy</button>
  <div>
    <label htmlFor='range'>Length {length} </label>
    <input type='range' 
    min={6}
    max={100}
    value={length}
    onChange={(e)=>setLength(e.target.value)}/>

    <label htmlFor='number'>Number</label>
    <input type='checkbox'
    value={numberAllow}
    onChange={()=>setNumberAllow((prev)=>!prev)}
    />  
    <label htmlFor='character'>Characters</label>
    <input type='checkbox'
    value={characterAllow}
        onChange={()=>setCharacterAllow((prev)=>!prev)}
    />  </div>

    </>
  )
}

export default App
