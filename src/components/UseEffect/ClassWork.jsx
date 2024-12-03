import React, { useEffect, useState } from 'react'

const ClassWork = () => {
    const[count, setCount] = useState(0);
    const[value, setValue] = useState(0);
    useEffect(()=>{
        console.log('useEffect fire')
        document.title = `useEffect ${count}`;
    },[count]);
  return (
    <div>
       <p>count : {count}</p> 
       <button onClick={()=>setCount(()=>count +1 )}>Increase</button>
       <p>value : {value}</p>
       <button onClick={()=>setValue(()=>value - 2)}>Decrease</button>
    </div>
  )
}

export default ClassWork;