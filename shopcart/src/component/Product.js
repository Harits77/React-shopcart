import React from 'react'
import { useContext } from 'react';
import {Context} from "../App";

export const Product = ({product}) => {
   const {cart,setcart} = useContext(Context);
  const addcart=()=>{
    setcart([...cart,product])
  };

  const Removecart=()=>{
    setcart(cart.filter((c)=>c.id !== product.id))
  };


  return (
      <div className="w-72 -ml-10 md:w-60 mt-10 ml-10 rounded  bg-white">
          <img className='w-72 md:w-60 h-52 rounded object-cover' src={product.pic} alt='fail' />
      <div className='px-6 py-4'>
          <h3 className='font-bold'>Name:{product.name}</h3>
          <p className='pt-3'>Price:{product.price}</p>
      </div>
       <div className='px-6 pb-2'>
        {
      
          <button onClick={addcart} className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300'>Add to cart</button>
        }
          
      </div>
    </div>

  )
}

export default Product