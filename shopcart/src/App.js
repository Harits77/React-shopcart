import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Cart from './component/Cart';
import Header from './component/Header';
import { useState ,createContext } from 'react';
 
export const Context = createContext();

function App() {
  const[cart,setcart]=useState([]);
  return (
   <Context.Provider value={{cart, setcart}}>
      <div>
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
     </div>
   </Context.Provider>
  );
}

export default App;
