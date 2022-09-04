import React from 'react';

const Input = ({ type, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    ></input>
  );
};

export default Input;
