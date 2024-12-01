import React, { useState } from 'react'

const ExampleOne = () => {
    const [count, setCount] = useState(()=>{
        const InitailCount = 10;
        return InitailCount;
    })
    const HandleClick = ()=>setCount((preCount)=> preCount + 1);
    return (
        <div>
            <p>count : {count}</p>
            <button onClick={HandleClick}>Update</button>
        </div>
  )}

export default ExampleOne;