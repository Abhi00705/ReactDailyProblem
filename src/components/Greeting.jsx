import React from 'react'

const Greeting = () => {
    const date = new Date();
    const name = 'Abhishek kumar';
    
  return (
    <div>
        <h1>Good Morning ! </h1>
        <p>{date.getDate()}</p>
        <p>{name}</p>
    </div>
  )
}

export default Greeting