import React from 'react'

const Products = () => {
    const Product = [
        {id:1, name:"Laptop", price:1200},
        {id:2, name:'Mobile', price:1000},
        {id:3, name:'mouse', price:200},
    ]
  return (
    <div>
        {
            Product.map(({id,name,price}) => (
                <ul key={id}>
                    <li>{name}</li>
                    <li>${price}</li>
                </ul>
            ))
        }
    </div>
  )
}

export default Products