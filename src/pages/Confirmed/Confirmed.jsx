import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './Confirmed.css';

function Confirmed() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  }, []);

  return (
    <div className='confirmed'>Order Received! Returning to Home Page</div>
  );
}

export default Confirmed;
