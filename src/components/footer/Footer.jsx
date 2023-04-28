import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo.jpg'

import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" className="logo-footer" />
      </div>

      <div className="footer-shopping">
        <h3>Shopping</h3>
        <div className="sub">
          <span> Track Order </span>
          <span> Track Shipping </span>
          <span> Shopping Cart </span>
        </div>
      </div>

      <div className="footer-products">
        <h3>Products</h3>
        <div className="sub">
          <span> Fruits and Vegetables </span>
          <span> Beverages </span>
          <span> All Products </span> 
        </div>
      </div>

      <div className="footer-developers">
        <Link to='https://github.com/MoonLightDotExe/web-buy'>
          <h3>Development</h3>
        </Link>
      </div>
    </footer>
  )
}

export default Footer