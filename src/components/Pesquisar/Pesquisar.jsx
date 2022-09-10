import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 7px;
  padding-left: 5px;
  background-color: #e6e6e6;
  border: none;
`;

const Pesquisa = ({ onChange }) => {
  return <Input onChange={onChange} placeholder="Pesquise aqui" />;
};

export default Pesquisa;
