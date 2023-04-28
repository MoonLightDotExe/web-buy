import React from 'react';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import ShoppingContext from '../../context/ShoppingContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {

  const {location} = useContext(ShoppingContext)
  const navigate = useNavigate()

    const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData(event.target)
      console.log(formData.get('name'));
  console.log(formData.get('address'));
  location(formData.get('name'),formData.get('address'))
  navigate('/confirmed')
    }

  return (
    <div>
      <h1>Address Form</h1>
      <form onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <br />
  <label>
    Address
    <input type="text" name="address" />
  </label>
  <br />
  <button className='btn btn-primary' type="submit"  > Submit</button>
</form>
    </div>
  );
}

export default Checkout;
