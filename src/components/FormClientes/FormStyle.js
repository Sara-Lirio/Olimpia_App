import styled from 'styled-components';

export const Form = styled.form`
  display: table;
  padding-top: 30px;
  text-align: center;
  max-width: 1360px;
  box-sizing: border-box;
  gap: 10px;
  padding: 50px 10px 10px 10px;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

export const Row = styled.div`
  width: 100%;
  padding: 30px 40px 10px 40px;
  height: auto;
  float: left;
  box-sizing: border-box;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
`;

function getWidthGrid(value) {
  if (!value) return;

  let width = (value / 12) * 100;
  return `width: ${width}%;`;
}

export const Column = styled.div`
  float: left;
  margin-top: 20px;
  text-align: start;
  padding: 0.25rem;
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;
  @media only screen and (max-width: 768px) {
    ${({ mobile }) => mobile && getWidthGrid(mobile)};
  }

  @media only screen and (min-width: 768px) {
    ${({ tablet }) => tablet && getWidthGrid(tablet)};
  }

  @media only screen and (min-width: 1000px) {
    ${({ desktop }) => desktop && getWidthGrid(desktop)};
  }
`;

export const DivInput = styled.div``;

export const Button = styled.button`
  background-color: #013e19;
  color: white;
  width: 270px;
  height: 35px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
`;
