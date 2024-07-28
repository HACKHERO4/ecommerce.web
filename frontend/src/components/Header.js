// frontend/src/components/Header.js
import React from 'react';
import './ccs.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/Checkout">Checkout</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
