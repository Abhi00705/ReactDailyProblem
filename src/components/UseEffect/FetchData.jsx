import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const[data, setData] = useState();
   async function fetchData(){
        const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await responce.json();
        console.log(data);
        if(data && data.length){
            setData(data);
        }
    }
    useEffect(()=>{
        fetchData();   
        },[])
  return !data ?(<h1>Loading....</h1>): (
    <div>
        {
            data.map((data)=>(
                <ul key={data.id}>
                    <li>{data.title}</li>
                    <li>{data.body}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default FetchData