// frontend/src/components/ProductList.js
import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from './CartContext';
import './cart.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        const productsData = response.data;
        if (Array.isArray(productsData)) {
          setProducts(productsData);
        } else {
          console.error('Expected an array of products but got:', productsData);
        }
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);


  return (
    <div className="container">
      <h2>Product List</h2>
      <div className="product-list">
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.id} className="product-item">
              <img 
                src={`http://localhost:5000${product.image}`} // Use the image URL from the backend
                alt={product.name} 
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
