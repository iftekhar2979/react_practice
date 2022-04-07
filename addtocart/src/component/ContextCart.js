import { faArrowCircleLeft, faMoneyBillTransfer, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { default as Item } from './item'
import { Product } from './Product'


const ContextCart = () => {
    const [item, setItem] = useState(Product);
  return (
    <>
        <header>
        <div className='continue-shopping'>
          <FontAwesomeIcon icon={faArrowCircleLeft} className='icon' />
          <h3>Continue Shopping</h3>
        </div>
        <div className='cart'>
          <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
          <p className='cart-number'>7</p>
        </div>
      </header>
      <section className='main-cart-section'>
        <h1>Shopping Cart</h1>
        <p>
          You have <span className='total-items-count'>7</span> items in
          shopping cart
        </p>

        <div className='cart-items'>
          <Scrollbars>
            {item.map((currentElement) => 
              <Item key={currentElement.id} det={currentElement} />)}
          </Scrollbars>
        </div>
        <div className='card-total'>
          <h2>
            Cart Total : <span>2200Tk</span>
          </h2>
          <button className='btn'>
            <FontAwesomeIcon icon={faMoneyBillTransfer} />
            BUY NOW
          </button>
        </div>
      </section>
    </>
  )
}

export default ContextCart