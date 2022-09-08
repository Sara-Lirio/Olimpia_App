import styled from 'styled-components';

export const Div = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Row = styled.tr`
  height: 50px;
  width: 160vh;
  background-color: #f1f1f1;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  border: 1px solid #e2e2e2;
`;

export const Cell = styled.td`
  width: 120px;
  word-wrap: break-word;
  text-align: center;
`;
