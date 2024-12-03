import React, { useState } from 'react'
import { createContext } from 'react'
import UserProfile from './UserProfile';
export const UsersContext = createContext(); 
const UserProvider = () => {


    const[user, setUser] = useState({
        name:'Abhishek',
        Roll:21,
    })
    const upDate =(newName, newAge)=>{
        setUser({
            name:newName,
            Roll:newAge,
        })
    }


  return (
    <UsersContext.Provider value={{user, upDate}}>
        <UserProfile/>
    </UsersContext.Provider>
  )
}

export default UserProvider