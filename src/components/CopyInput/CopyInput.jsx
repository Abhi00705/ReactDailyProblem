import React, { useState } from 'react'
import CopyClip from './CopyClip';

const CopyInput = () => {
    const[inputText, setInputText] = useState('');
    const[time, setTime] = useState(false);
    const HandleSubmit = (e)=>{
        e.preventDefault();
        navigator.clipboard.writeText(inputText).then(()=>{
            setTime(true);
            setTimeout(()=>setTime(false),2000);
        })
    }
  return (
    <div>
        <form onSubmit={HandleSubmit}>

        <input 
        type="text"
        value={inputText}
        onChange={(e)=>setInputText(e.target.value)}
        />
        <button type='submit'>Copy</button>
        <CopyClip time={time}/>
        </form>
    </div>
  )
}

export default CopyInput