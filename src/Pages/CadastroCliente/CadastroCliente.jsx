import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header.jsx';
import ManReading from '../../assets/man-reading.png';

const DivTitulos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.5rem;
  background-color: #e9e9e9;
  align-items: flex-start;
  border-radius: 15px;
  padding-left: 35px;
`;

const DivGeral = styled.form`
  margin: 0 auto;
  display: grid;
  width: 70%;
  height: 600px;
  grid-template-columns: 35% 65%;
  grid-template-rows: repeat(1, 1fr);
  border-radius: 15px;
  margin-top: 40px;
  box-shadow: 0px 0px 18px 5px rgba(0, 0, 0, 0.08);
`;

const Img = styled.img`
  width: 330px;
`;

const CadastroCliente = () => {
  return (
    <div>
      <Header />
      <DivGeral>
        <DivTitulos></DivTitulos>
      </DivGeral>
    </div>
  );
};

export default CadastroCliente;
