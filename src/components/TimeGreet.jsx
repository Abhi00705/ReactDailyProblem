import React from 'react'

const TimeGreet = (timeOfDay) => {
    if(timeOfDay === "morning" ){
        return <h1>Good Morning !</h1>;
    }
    else if(timeOfDay === 'afternoon'){
        return <h1>Good AfterNoon !</h1>;
    }
    else{
        return <h1>Good Evening !</h1>;
    }
  
}

export default TimeGreet