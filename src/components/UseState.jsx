import React from 'react'

const UseState = ({islogin, isAdmin}) => {
  return (
    <div>
        {(islogin && isAdmin ) ? (<h1>Welcome Admin </h1>) : (<h1>Welcome user</h1>)}
    </div>
  )
}

export default UseState