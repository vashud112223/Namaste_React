import React from 'react'
import { useEffect,useState } from 'react';
import { FETCH_URL } from './constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState({});
  useEffect(() => {
     fetchMenu();
   }, []);

   const fetchMenu = async () => {
     try {
       const data = await fetch(
         FETCH_URL + resId
       );
       const json = await data.json();
       console.log(json);
       setResInfo(json);
     } catch (error) {
       console.error("Failed to fetch menu:", error);
     }
   };
   return resInfo;
}

export default useRestaurantMenu