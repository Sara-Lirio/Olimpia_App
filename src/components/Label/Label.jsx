import React from 'react';
import styled from 'styled-components';

const Label = ({ className, texto }) => {
  return <label className={className}>{texto}</label>;
};

const StyleLabel = styled(Label)`
  color: gray;
  margin-bottom: 10px;
`;

export default StyleLabel;

