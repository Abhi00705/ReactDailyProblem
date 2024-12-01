import React, { useState } from 'react'
// correct this file
const Profile = () => {
    const[profile, setProfile] = useState({
        name:'',
        age:'',

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
          ...prevProfile,
          [name]: value,
        }));
      };
    
    return (
    <div>
        <h1>Profile:</h1>
        <label>Name:
            <input type='text' name='name' value={profile.name} placeholder='Enter your name ' onChange={handleChange}/>
        </label>

        <label>age:
            <input type='number'name='age' value={profile.age} placeholder='Enter your age ' onChange={handleChange}/>
        </label>
         
         <ul>Name: 
            <li>{profile.name}</li>
            <br/>
            Age: 
            <li>{profile.age}</li>
         </ul>
    </div>
  )
}

export default Profile