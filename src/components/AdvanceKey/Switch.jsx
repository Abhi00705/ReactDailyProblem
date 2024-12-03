import React, { useState } from 'react'

const Switch = () => {
    const[sw, setSw] = useState(false);
  return (
    <div>
        {
            sw ? (<p>Dark</p>): (<p>Light</p>)
        }
        <br/>
        <input type="text" key={sw ? 'Dark':'light'} />
        <button onClick={()=>setSw((s)=>!s)}>Switch</button>
    </div>
  )
}

export default Switch