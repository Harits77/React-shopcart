import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = ({cart}) => {
  return (
    <div className='flex bg-slate-700 justify-between p-3 text-white fixed w-full top-0 left-0'>
      <div className='text-xl '>Mens Wear</div>'>
      <div className='text-xl '>Mens Wear</div>
      <ul className='flex md:space-x-7'>
        <li className='text-xl pr-5'>
          <Link to='/'>Home</Link>
        </li>
        <li className='text-xl md:pr-16'>
          <Link to='/cart'><span className='mr-3 p-1 bg-yellow-400 rounded-full'>{cart.length}</span>Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
