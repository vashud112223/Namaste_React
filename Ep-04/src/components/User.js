import React from "react";
import { useState } from "react"

const User =({name}) =>{
    
    const [count, setCount] =useState(0);
    return(
        <div className="user-card">
            <button onClick={()=>{
                setCount(count+1)
            }}>Counter:{count}</button>
            <h2>Name:{name}</h2>
            <h3>Location: Lucknow</h3>
        </div>
    )
}
export default User