import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './product.css';

const Product = (props) => {
  const { name, img, price, stock, seller } = props.details;
  return (
    <div className='card'>
      <div className='img'>
        <img src={img} alt='' srcset='' />
      </div>
      <div className='details'>
        <h2>{name}</h2>
        <h3>Price :$ {price}</h3>
        <small>seller : {seller}</small>
        <small>Only {stock} is left</small>
        <button className='btn' onClick={() => props.handleProduct(props)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
