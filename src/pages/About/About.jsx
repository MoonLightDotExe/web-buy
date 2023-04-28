import React from 'react';
import { Link } from 'react-router-dom';

import './About.css';

function About() {
  return (
    <div className='about-page'>
      <h2> About Us </h2>
      <p>POPULAR BRANDS:
      Amul, Nescafe , MTR, RED BULL , elite cake, Pediasure, Yummiez, Yera, Yakult</p>
      <p>
      CITIES WE SERVE:
      Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Mysore, Madurai,  Jaipur, Bhopal, Noida-Ghaziabad, Kochi,  </p>
      <p>This is a starter Project.</p>
      <p> Version 1.0.0 </p>

      <p>
        <Link to='/home'>Back to Home Page</Link>
      </p>
    </div>
  );
}

export default About;
