import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/product';
import product from './fakeData/products.JSON';
import './ShopModule.css';

const Shop = () => {
  const products = product;
  const [production, setProduction] = useState([]);
  useEffect(() => {
    fetch(products)
      .then((res) => res.json())
      .then((data) => {
        const dataCompile = data.slice(0, 10);
        setProduction(dataCompile);
      });
  }, []);
  
  const [cart,setCart]=useState([])
  const handleAddProduct = (product) => {
    console.log('product added',product);
    const newCart=[...cart,product];
    setCart(newCart)
  }; 
 

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {production.map((pd) => (
          <Product details={pd} handleProduct={handleAddProduct} ></Product>
        ))}
      </div>
      <div className='cart-container'>
        <h3>CART DETAILS</h3>
        <h5>Order Summary :{cart.length} </h5>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
