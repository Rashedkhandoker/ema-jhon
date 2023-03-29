import React from 'react';
import './Header.css';
import image from '../../images/Logo.svg';

const Header = () => {
  return (
    <nav className="header">
      <img src={image} alt="" />
      <div>
        <a href="">Order</a>
        <a href="">Order review</a>
        <a href="">Manage Inventory</a>
        <a href="">Login</a>
      </div>
    </nav>
  );
};

export default Header;
