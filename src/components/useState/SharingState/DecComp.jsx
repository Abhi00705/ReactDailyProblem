import React from 'react'

const DecComp = ({count, onHandle}) => {
    const HandlerInc = ()=>{onHandle()};
  return (
    <div>
        
        <button onClick={HandlerInc}>-</button>
    </div>
  )
}

export default DecComp