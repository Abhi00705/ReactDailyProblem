import React, { useContext } from 'react'
import {Data,Data1} from './Context.jsx'
import ComponentB1 from './ComponentB1.jsx';

const ComponentA1 = () => {
  const userName = useContext(Data);
  const userAge = useContext(Data1);

  return (
    <>
    <ComponentB1/>
    <h1>i am in A : {userName} and I'm {userAge} Years old.</h1>

    </>
    // <Data.Consumer >
        
    //   {(name)=>{
    //       return(
    //         <Data1.Consumer>
    //           {(Age)=>{
    //               return(
    //                 <h1>my name is {name} and i am {Age} Year old.</h1>
    //               )}}
    //         </Data1.Consumer>
    //       )

    //     }
    //   }
    // </Data.Consumer>
  )
}

export default ComponentA1;