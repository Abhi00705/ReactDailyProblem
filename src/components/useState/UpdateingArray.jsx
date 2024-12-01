import React, { useState } from 'react'

const UpdateingArray = () => {
    const[Friend,setFriend] = useState(["Abhishek", "shahid", "wall"]);
    const AddOne =()=>setFriend([...Friend, 'dhruv']);
    const Remove = ()=>setFriend(Friend.filter(f => f != 'wall'));
    const Update =()=>setFriend(Friend.map(f => f === 'Abhishek'?'Abhishek kumar':f));
  return (
    <div>
        {Friend.map((t) => (
        <li key={Math.random()}>{t}</li>
      ))}
        <button onClick={AddOne}>Add</button>

        <button onClick={Remove}>Remove</button>
        <button onClick={Update}>Update</button>

    </div>
  )
}

export default UpdateingArray