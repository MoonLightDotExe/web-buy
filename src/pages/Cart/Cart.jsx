import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ShoppingContext from '../../context/ShoppingContext';

import './Cart.css';

function Cart() {
  const { total, cart } = useContext(ShoppingContext);

  return (
    <div className='shopping'>
      <h1 className='heading'>Shopping Cart</h1>
      <div className='cart'>
        <div className='cart-items'>
          {cart.map((item) => (
            <div
              key={item.id}
              className='cart-item'
            >
              <img
                src={`${item.img}`}
                alt={item.name}
              />
              <div className='product-details'>
                <p className='product-name'>{item.name}</p>
                <p className='product-price'>₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='cart-total'>
        Total : ₹{total}
        <Link to='/checkout'>
          <button className='btn btn-primary btn-checkout'>Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
