import React, { useState } from 'react'

const ShopingList = () => {
    const[ShopingList, setShopingList] = useState([]);
    const[name, setName] = useState('')
    const[quntity, setQuntity] = useState('');
    const HandleSubmit = (e)=>{
        e.preventDefault();
        const item = {
            name,
            quntity : parseInt(quntity),
        }
        setShopingList([...ShopingList, item]);
        setName('');
        setQuntity('');
    }

  return (
    <div>
        <h1>Shoping List </h1>
        <form onSubmit={HandleSubmit}>
            
            <input type="text " value={name} placeholder='enter name' onChange={(e)=>(setName(e.target.value))} />
            <br></br> <br></br>
            <input type="text " value={quntity} placeholder='enter quntity' onChange={(e)=>(setQuntity(e.target.value))}/>    
            <br></br><br></br>
            <button type='submit'>Submit</button>
        </form> 
        <ul>
            {
                ShopingList.map((f) => (
                    <li>Name: {f.name} - Quntity: {f.quntity}</li>
                    
                ))
            }    
        </ul>   
    </div>
  )
}

export default ShopingList