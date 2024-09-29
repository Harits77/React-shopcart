import React, { useState } from 'react'
import data from '../assets/products.json';
import Product from './Product';

const Home = () => {
  
  const[products]= useState(data);
  return (
    <div className='md:grid grid-cols-4 mx-28 mt-5'>
      {products.map((product)=>(
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Home