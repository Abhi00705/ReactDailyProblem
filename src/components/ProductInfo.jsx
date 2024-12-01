import React from 'react'

const ProductInfo = () => {
    const name = 'laptop';
    const price = '$15500';
    const avalibility = 'In Stock';
  return (
    <div>
       Product: {name} <br/>
       price: {price}<br/>
       Avalibiliry: {avalibility}
    </div>
  )
}

export default ProductInfo