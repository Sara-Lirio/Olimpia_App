import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header.jsx';
import FormClientes from '../../components/FormClientes/FormClientes.jsx';
import ManReading from '../../assets/man-reading.png';

const DivTitulos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  padding-top: 50px;
  gap: 10px;
  background-color: #e9e9e9;
  align-items: flex-start;
  border-radius: 15px;
  padding-left: 35px;
`;

const DivGeral = styled.form`
  margin: 0 auto;
  display: grid;
  width: 60%;
  height: 500px;
  grid-template-columns: 35% 65%;
  grid-template-rows: repeat(1, 1fr);
  border-radius: 15px;
  margin-top: 60px;
  box-shadow: 0px 0px 18px 5px rgba(0, 0, 0, 0.08);
`;

const Img = styled.img`
  width: 270px;
  margin-top: 40px;
`;

const Div = styled.div`
  height: 100px;
  color: transparent;
`;

const CadastroCliente = ({text}) => {
  return (
    <div>
      <Header />
      <DivGeral>
        <DivTitulos>
          <h1>{text} de clientes</h1>
          <p>Pronto para criar novas histórias?</p>
          <Img src={ManReading} alt="" />
        </DivTitulos>
        <FormClientes />
      </DivGeral>
      <Div>
        <p>conteudo</p>
      </Div>
    </div>
  );
};

export default CadastroCliente;
