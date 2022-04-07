import React, { createContext } from 'react';
import './Cart.css';
import { Product } from './Product';


 export const AppContext = createContext();

function Cart() {

  return (
    <>
   <AppContext.Provider value={Product} >
     <AppContext></AppContext>
   </AppContext.Provider>
    </>
  );
}

export default Cart;
