import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header.jsx';
import WomenGlasses from '../../assets/WomenGlasses.png';
import FormLivros from '../../components/FormLivros/FormLivros.jsx';
import S from './CadastroLivro.module.css'

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
  margin-top: 90px;
`;


const CadastroLivro = ({text}) => {
  return (
    <div>
      <Header/>
      <DivGeral className={S.boxForm}>
      <DivTitulos className={S.divTitle}>
          <h1>{text} livros</h1>
          <p>Um universo de infinitas possibilidades!</p>
          <Img src={WomenGlasses} alt="Desenho de uma mulher lendo" />
        </DivTitulos>
        <div>
          <FormLivros />
        </div>
      </DivGeral>
    </div>
  )
}

export default CadastroLivro