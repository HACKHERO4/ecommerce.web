// frontend/src/components/Cart.js
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './cart.css';

function Cart() {
  const { cartItems, removeFromCart, calculateTotal } = useContext(CartContext);


  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-list">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img 
                src={`http://localhost:5000${item.image}`} // Use the image URL from the backend
                alt={item.name} 
                className="cart-image"
              />
              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${calculateTotal()}</h3>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
