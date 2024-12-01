import React from 'react'
import { useState } from 'react'
const BasicCount = () => {
    const[count, setCount] = useState(0);
    const inc = ()=>setCount(count + 1);
    const dec = ()=>setCount(count - 1);

  return (
    <div>
        {count}    
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>

    </div>
  )
}

export default BasicCount