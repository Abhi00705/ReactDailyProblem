import React,{useContext, useState} from 'react'
import { UsersContext } from './UserProvider'

const UpdateUser = () => {
    const {upDate } = useContext(UsersContext);
    const[newUpDate, setNewUpDate] = useState();
    function HandleChange(e){
        e.preventDefault();
        
        if(newUpDate.trim()){
            upDate(newUpDate);
            setNewUpDate('');
        }

    }
  return (
    <>
    <h2>
        Update Name 
    </h2>
    <form onSubmit={HandleChange}>
        <input type="text" value={newUpDate} onChange={(e)=>{
            setNewUpDate(e.target.value)
        }} />
        <button type='submit'>UpDate</button>
    </form>
    

    </>
  )
}

export default UpdateUser