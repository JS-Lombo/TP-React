import React from 'react';

const Input = ({ label, value, onChange, type = 'text' }) => (
  <div style={{ marginBottom: '1rem' }}>
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{ display: 'block', padding: '0.5rem', width: '100%' }}
      />
    </label>
  </div>
);

export default Input;
