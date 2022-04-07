import React from 'react';
import logo from '../../images/logo.png';
import './HeaderModule.css';

const Header = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='' srcset='' />
      <nav>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/review">Order review</a></li>
          <li><a href="/manage">Manage Inventory</a></li>
      </nav>
    </div>
  );
};

export default Header;
