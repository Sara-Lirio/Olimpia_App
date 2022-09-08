import React from 'react';
import styled from 'styled-components';

const Input = ({ value, type, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    ></input>
  );
};

const StyleInput = styled(Input)`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #eeeeee;
  padding-left: 8px;
`;

export default StyleInput;
