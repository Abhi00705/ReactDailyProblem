import React, { useState } from 'react'

const TodoList = () => {
    const[List, setList] = useState([]);
    const[input, setInput] = useState('');

    const HandleSubmit = (e)=>{
        e.preventDefault();
        if(input.trim()){
            setList([...List,input]);
            setInput('');
        }
    }
  return (
    <div>
        <form onSubmit={HandleSubmit}>
            <input type='text' value={input} placeholder='Enter todos' onChange={
                (e)=>{setInput(e.target.value)}
            }/>
            <button type='submit'>Add Todo</button>
        </form>
        
        <ul>Todos:<br/>
            {
                List.map((f)=>(
                    <li key={Math.random()*10}>{f}</li>
                ))
            }
        </ul>
        
    </div>
  )
}

export default TodoList