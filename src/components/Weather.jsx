import React from 'react'

const Weather = (props) => {
    let content ;
    if(props.temp < 15 ) {
        content = <h1>it's cold outside</h1>
    }
    else if (props.temp >= 15 & props.temp <= 25 ){
        content = <h1>it's worm outside</h1>
    }
    else {
        content = <h1>it's hot outside</h1>
    }
  return (
    <div>
       {content}
    </div>
  )
}

export default Weather