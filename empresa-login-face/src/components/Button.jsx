import React from 'react';

const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: '0.5rem 1rem',
      marginRight: '1rem',
      marginTop: '0.5rem',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    }}
  >
    {text}
  </button>
);

export default Button;
