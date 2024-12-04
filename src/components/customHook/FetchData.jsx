import React from 'react'
import useFetch from './useFetch'

const FetchData = () => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  return (
    <div>
        {
            data.map((item)=>{
                return(
                    <>
                        <p>item.userId</p>
                        <p>item.id</p>
                        <p>item.title</p>
                        <p>item.completed</p>
                    </>
                )
            })
        }
    </div>
  )
}

export default FetchData