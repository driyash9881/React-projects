// import React from 'react'
// import {useState , useEffect } from "react";
// const usedate = () => {
// const [today, setDate] = useState(new Date())
// const locale = "en"

// useEffect(()=>{
 
//    const timer= setInterval(() => {
//       setDate(new Date())
//     }, 60*1000);
//     return()=>{
//     clearInterval(timer);
//     }; 
// },[]);

// const day = today.toLocaleDateString(locale,{weekday:long})
// const date = `${day} ${today.getDate} ${today.toLocaleDateString(locale , {month:"long"})}\n\n`
// const time = `${today.toLocaleDateString(locale , {hour:"numeric" , hour12:true , minute:"numeric"})}`  
// console.log( day)
// console.log(date)
// console.log(time)
// }
// return{
//    date:date,
//     time:time, 

// }
// export default usedate