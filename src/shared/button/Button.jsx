import React from 'react';

import './Button.css';

function Button({ type, isDisabled, children, click }) {
  return (
    <button
      disabled={isDisabled}
      className={`btn btn-${type}`}
      onClick={click}
    >
      {children}
    </button>
  );
}

export default Button;
