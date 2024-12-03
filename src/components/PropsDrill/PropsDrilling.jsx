import React, { useState } from 'react'
import ComponentA from './ComponentA';

const PropsDrilling = () => {
    const name = 'Ashok king'
  return (
    <div>
        <ComponentA name={name}/>
    </div>
  )
}

export default PropsDrilling;