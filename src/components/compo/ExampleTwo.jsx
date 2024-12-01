import React, { useState } from 'react'

const ExampleTwo = () => {
    const [count, setCount] = useState(()=>Math.round(Math.random()*10));
    const HandleClick = () => setCount(()=>{
        const a = Math.round(Math.random()*10);
        return a;
    })
  return (
    <div>
        <p>count : {count}</p>
        <button onClick={HandleClick}>Click</button>
    </div>
  )}

export default ExampleTwo;