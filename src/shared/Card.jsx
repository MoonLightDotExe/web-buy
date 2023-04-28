import React from 'react';

import Button from './button/Button';
import { useContext } from 'react';
import ShoppingContext from '../context/ShoppingContext';

import './Card.css';

function Card({ img, title, price, id }) {
  const { addToCart } = useContext(ShoppingContext);

  const handleClick = (img, title, price) => {
    const prod = {
      name: title,
      price: price,
      img: img,
    };
    addToCart(prod);
  };

  return (
    <div className='card'>
      <div className='card-logo-container'>
        <img
          src={`${img}`}
          alt={title}
          className='card-logo'
        />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>₹{price}</p>
        <div className='btns'>
          <button
            className='btn btn-primary'
            type='primary'
            onClick={() => handleClick(img, title, price)}
          >
            Add to Cart
          </button>
          <Button type='secondary'>Wishlist</Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
