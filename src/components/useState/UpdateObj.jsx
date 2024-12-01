import React, { useState } from 'react'

const UpdateObj = () => {
    const[Movie, setMovie] = useState({
        name:'Lucy',
        rating:5,
    })
    const HandleObject = ()=>{
        setMovie({name:'lucy', rating:7});
    }
  return (
    <div >
        <p>{Movie.name}</p>
        <p>{Movie.rating}</p>
        <button onClick={HandleObject}>rate movie</button>
    </div>
  )
}

export default UpdateObj