import React, {useReducer, useState} from 'react'
import {initialState, reducer} from './counterReducer'

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [num, setnum] = useState();

    function HandleClickAdd(){
        dispatch({type:"incrementByAmount" , payload:Number(num)})
        setnum('');
    }  
    
    function HandleClickSub(){
        dispatch({type:"decrementByAmount" , payload:Number(num)})
        setnum('');
    } 
    
  return (
<>
    <h1>count:{state.count}</h1>
    
    <button onClick={()=>{
        dispatch({type:'increment'})
    }}>  +  </button>
    
    <button onClick={()=>{
        dispatch({type:'decrement'})
    }}>  -  </button>
    
    <button onClick={()=>{
        dispatch({type:'reset'})
    }}> Reset </button>

    <div>
        <input type="text" value={num} onChange={(e)=>setnum(e.target.value)} />
        <button onClick={HandleClickAdd}> Add </button>
        <button onClick={HandleClickSub}>Subtract</button>
    </div>
</>
  )
}

export default Counter