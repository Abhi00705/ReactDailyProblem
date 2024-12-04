import React,{useRef} from 'react'


const FocusInput = () => {
    const focus = useRef('abhishek');
    console.log(focus);
    const HandleClick=()=>{
       focus.current.focus();
        
    }
  return (
    <div>
        <input type="text" ref={focus} />
        <button onClick={HandleClick}>Click</button>
    </div>
  )
}

export default FocusInput