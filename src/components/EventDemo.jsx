import React from 'react'

const EventDemo = () => {
    function Button (){
        const HandleClick =()=>{
            console.log(Math.round(Math.random()*10));
        }
        return(
            <button onClick={HandleClick}>
                Click
            </button>
        )
    }

    function HandleCopy (){
        alert("stop steeling the text");
        console.log("stop steeling the text!");
            
        
    }

    function HandleHover(){
        alert("Mouse hover event fire!");
        console.log("Mouse hover event fire!");
    }
  return (
    <div>
        <Button/>
        <p onCopy={HandleCopy}>
            Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. At laborum repellendus
             tenetur culpa eius qui vel corrupti ratione facilis est. In repellat fugit alias quis labore itaque praesentium tempore reiciendis!
            Doloribus ea ab voluptatibus, sequi voluptate
             eos ex odit dolorem totam vel nisi. Nemo tempore
              quas, consequuntur harum iste animi assumenda 
              architecto praesentium. Et, minus repellat 
              nemo voluptates hic eaque.
        </p>
        <p onMouseMove={HandleHover}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt mollitia nemo doloribus consectetur dolorum hic optio beatae omnis neque iusto, nam laboriosam ullam porro sit dolor repellendus animi architecto libero.
            Optio qui, repellendus omnis fuga nobis quaerat. Dolorem eveniet quas deleniti rerum possimus minima magnam amet maiores, excepturi ipsam dolor ab eum accusantium repudiandae veniam. Fugiat quod consequuntur earum excepturi!
        </p>
    </div>
  )
}

export default EventDemo;