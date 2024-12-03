import React, { createContext, useState } from 'react' 
import ComponentA1 from './ComponentA1';

export const Data = createContext();
export const Data1 = createContext();

const ContextPra = () => {
    const [name, setName] = useState('abhishek kumar');
    const[Age, setAge] = useState(23);
  return (
    
        <Data.Provider value={name}>
          <Data1.Provider value={Age}>
            <ComponentA1/>
          </Data1.Provider>
        </Data.Provider>
        
   
  )
}

export default ContextPra