import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoggedIn.css';

function LoggedIn() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  }, []);
  return <div className='LogIn'>Logged In!</div>;
}

export default LoggedIn;
