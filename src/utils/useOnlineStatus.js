import React, { useEffect, useState } from 'react'

const useOnlineStatus = () => {
  const[OnlineStatus, setOnlineStatus] = useState(true);
   // check if online
   useEffect(()=>{
    useOnlineStatus();
   },[])

  const useOnlineStatus = () =>{
     window.addEventListener("offline",()=>{
     setOnlineStatus(false);
    })

     window.addEventListener("online",()=>{
     setOnlineStatus(true);
    })
  }
   //boolean value
   return OnlineStatus;
}

export default useOnlineStatus