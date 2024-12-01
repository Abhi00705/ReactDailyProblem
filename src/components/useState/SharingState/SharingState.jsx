import React, { useState } from 'react'
import IncComp from './IncComp';
import DecComp from './DecComp';

const SharingState = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <IncComp count={count} onHandle={()=>setCount((count)=>count + 1)}/>
        <DecComp count={count} onHandle={()=>setCount((count)=>count - 1)}/>
    </div>
  )
}

export default SharingState