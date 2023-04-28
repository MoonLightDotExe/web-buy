import React from 'react';
import { Link } from 'react-router-dom';

import { BiBasket } from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import logo from '../../assets/logo.jpg';

import './Navbar.css';

function Navbar() {
  return (
    <nav className='navigation'>
      <div className='box'>
        <div className='logo-box'>
          <Link to='/home'>
            <img
              src={logo}
              alt='logo'
              className='logo'
            />
          </Link>
        </div>
        <Link to='/home'><div className='home-nav'>HOME</div></Link>
        <Link to='/about'> <div className='about'>ABOUT</div> </Link>
        <div className='track'>TRACK</div>
      </div>

      <div className='manage'>
        <Link
          to='/cart'
          className='cart-icon'
        >
          <BiBasket
            size={50}
            className='icon'
          />
        </Link>

        <Link
          to='/user'
          className='user-icon'
        >
          <BiUser
            size={50}
            className='icon'
          />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
