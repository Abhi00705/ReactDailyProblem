import React from 'react'

const IncComp = ({count, onHandle}) => {
const HandlerInc = ()=>{onHandle()};
    return (
    <div>
    <p>{count}</p>
    <button onClick={HandlerInc}>+</button>
    </div>
  )
}

export default IncComp