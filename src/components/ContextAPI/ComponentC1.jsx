import React, { useContext } from 'react'
import {Data,Data1} from './context'
const ComponentC1 = () => {
    const Name = useContext(Data);
    const Age = useContext(Data1);
  return (
    <h1>i am in C :{Name} and i'm {Age} years old.</h1>
  )
}

export default ComponentC1