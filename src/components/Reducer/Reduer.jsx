import React,{useReducer} from 'react'
const initialState = {
    count:1,
}
const reducer = (state, action)=>{
    switch(action.type)
    {
        case 'increment':
            return{...state, count: state.count + 1 };
        case 'decrement':
            return{...state, count: state.count - 1 };
        case 'reset':
            return{...state, count:0 };
        default:
            return state;
    }
}
const Reduer = () => {
    const[state, dispatch] = useReducer(reducer,initialState);
  return (
  <>
    <h1>  count:{state.count}  </h1>
    <button onClick={()=>{
        dispatch({type:'increment'})
    }}>+</button>
    
    <button onClick={()=>{
        dispatch({type:'decrement'})
    }}>-</button>
    
    <button onClick={()=>{
        dispatch({type:'reset'})
    }}>Reset</button>


  </>

  )
}

export default Reduer;