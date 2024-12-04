import { useEffect, useRef, useState } from "react"
import React from 'react'

const Timer = () => {
    const intervelRef = useRef(null);
    const [count, setCount] = useState(0);

    useEffect(()=>{
        intervelRef.current=setInterval(()=>{
            setCount((preCount)=>preCount + 1);
        },1000)
        return(()=>{
                clearInterval(intervelRef.current);
            })
    }
    )
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={()=>clearInterval(intervelRef.current)}>Stop Timer</button>
    </div>
  )
}

export default Timer