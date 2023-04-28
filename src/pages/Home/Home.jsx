import React from 'react';
import { useContext } from 'react';

import Card from './../../shared/Card';
import logo from '../../assets/logo.jpg';
import ShoppingContext from '../../context/ShoppingContext';

import './Home.css';
import products from './../../MOCK/data';

function Home() {
  return (
    <div className='home'>
      <div className='products'>
        {products.map((product) => (
          <Card
            id={product.id}
            key={product.id}
            title={product.name}
            price={product.price}
            img={product.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
