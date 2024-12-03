import React from 'react'
import { useContext, } from 'react';
import { UsersContext } from './UserProvider';
import UpdateUser from './UpdateUser';
const UserProfile = () => {
    const {user} = useContext(UsersContext);
  return (
    <>
        <h1>i am {user.name}, my roll number is {user.Roll}</h1>

        <UpdateUser/>   
    </>

  )
}

export default UserProfile;