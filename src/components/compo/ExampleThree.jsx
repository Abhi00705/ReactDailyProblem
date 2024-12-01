import React, { useEffect, useState } from 'react'

const ExampleThree = () => {
    const [names, setNames] = useState(()=>{
        const saveName =localStorage.getItem("names");
        return saveName ? JSON.parse(saveName) : ''; 
    });
    useEffect(()=>{
        const data = JSON.stringify(names);
        localStorage.setItem('names', data);
    },[names])
    const HandleEvent = (event)=>{
        setNames(event.target.value)
    }
    const HandleClear = ()=>{
        setNames('')
    }
  return (
    <div>
       <h1>Your Name : </h1> 
       <input 
       type='text' 
       value={names} 
       onChange={HandleEvent}
       placeholder='Enter your name'
       />
       <button onClick={HandleClear}>Clear</button>
    </div>
  )
}

export default ExampleThree