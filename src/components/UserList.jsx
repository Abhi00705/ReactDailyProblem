import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
      ];
  return (
    <div>
        {/* destrature users data */ }
        {
            users.map(({id, name, age}) => (    
                <ul key={id}>
                    
                    <li>{name}</li>
                    <li>{age}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default UserList