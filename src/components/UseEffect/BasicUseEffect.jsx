import React, { useEffect } from 'react'

const BasicUseEffect = () => {
    useEffect(()=>{
        console.log("First render!");
    },[])
  return (
    <div>
        Hello
    </div>
  )
}

export default BasicUseEffect