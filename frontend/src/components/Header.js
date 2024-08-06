// frontend/src/components/Header.js
import React from 'react';
import './ccs.css';
import ImageSlider from './ImageSlider';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/Checkout">Checkout</Link></li>
        </ul>
      </nav>
    </header>
    <div className="content">
        <div className="animated-text">Welcome To Step up Style where Comfort
          and beauty is our number one Priority</div>
      </div>
      <ImageSlider />
    </div>
  );
}

export default Header;
