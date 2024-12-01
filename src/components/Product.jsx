import React from 'react';

const Product = ({pname, price}) => {
  return (
    <div>
        <h1>{pname}</h1>
        <h2>{price}</h2>
    </div>
  )
}

export default Product;