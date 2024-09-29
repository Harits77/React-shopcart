import React, { useEffect, useState ,useContext} from 'react';
import {Context} from "../App";

const Cart = () => {
  const {cart,setcart} = useContext(Context);
  const Removecart=(product)=>{
    setcart(cart.filter((c)=>c.id !== product.id))
  };


  const[total,setTotal]=useState(0);
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc + parseInt(curr.price),0));
  },[cart]);

  return (
    <div className='p-5'>
   
      {
        cart.map((Product)=>(
          <div className='flex space-x-5 border-2 mt-5' key={Product.id}>
          <div className=' p-6 md:p-5'>
          <img className='w-40 h-28 mt-2 object-cover' src={Product.pic} alt="img" />
        </div>
        <div className='md:p-4 pt-6'>
           <h3 className='font-bold'>Product Name : <span className='text-white'>{Product.name}</span></h3>
           <p className='font-bold mt-1'>Price RS: <span className='text-white'>{Product.price}</span></p>
           <button onClick={()=>Removecart(Product)} className='bg-red-500 text-white font-bold rounded hover:bg-red-700 transition duration-300 mt-1 py-2 md:mt-3 px-4 '>Remove to cart</button>
        </div>
        </div>
        ))
      }
     <div className='p-5'>
      <p className='font-bold text-xl'>Total Amount RS : {total} </p>
    </div>
    </div>
  ) 
}

export default Cart