import React, { useState } from 'react'

const ArrayObject = () => {
    const[student, setStudent] = useState([
        {name:'Abhishek', roll:1, sub:'science'},
        {name:'Mohan', roll:2, sub:'Sanskrit'},
        {name:'Ramesh', roll:3, sub:'EVS'},
    ]);
    const HandleObj = () => {
        setStudent(student.map(f => f.roll === 1 ? {...f, name : 'Abhishek kumar'} : f ))
    }
  return (
    <div>
        {
            student.map(f => (
                <ul key={Math.random()}>
                <li>{f.name}</li>
                <li>{f.roll}</li>
                <li>{f.id}</li>
                </ul>
            ))
        }
        <button onClick={HandleObj}>update</button>
    </div>
  )
}

export default ArrayObject