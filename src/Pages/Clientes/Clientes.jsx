import React from 'react';
import Header from '../../components/Header/Header';
import { Div } from '../../styles/global.js';
import { Cell, Row } from '../../styles/global.js';
import TabelaClientes from '../../components/TabelaClientes/TabelaClientes.jsx';

const Clientes = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <div></div>
      <Div>
        <th>
          <Row>
            <Cell align="left">id</Cell>
            <Cell align="left">Nome do cliente</Cell>
            <Cell align="left">E-mail</Cell>
            <Cell align="left">CPF</Cell>
            <Cell align="left">Senha</Cell>
            <Cell align="left">Telefone</Cell>
            <Cell align="left">CEP</Cell>
            <Cell align="left">Atualizar</Cell>
            <Cell align="left">Deletar</Cell>
          </Row>
        </th>
        {infos?.map((infos, index) => {
          return (
            <TabelaClientes
              id={infos.id}
              nome={infos.nome}
              cpf={infos.cpf}
              email={infos.email}
              senha={infos.senha}
              telefone={infos.telefone}
              cep={infos.cep}
              key={index}
              handleAtualizaTela={handleAtualizaTela}
            />
          );
        })}
      </Div>
    </div>
  );
};

export default Clientes;
