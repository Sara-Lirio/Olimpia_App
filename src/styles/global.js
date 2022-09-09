import styled from 'styled-components';

export const Div = styled.div`
  margin-top: 100px;
  margin-left: 130px;
`;

export const Search = styled.div`
  display: flex;
  width: 90%;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  height: 35px;
  width: 250px;
  border-radius: 8px;
  border: 1px solid black;
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
