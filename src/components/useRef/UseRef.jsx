import React, {useRef} from 'react'

const UseRef = () => {
    const inputElement = useRef();
    console.log(inputElement);
    function HandleClick(){
        inputElement.current.focus();
        inputElement.current.value='Abhishek';
    }
  return (
    <div>
        <input type="text" ref={inputElement}/>
        <button onClick={HandleClick}>Focus</button>
    </div>
  )
}

export default UseRef