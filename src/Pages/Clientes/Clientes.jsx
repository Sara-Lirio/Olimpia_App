import React from 'react';
import Header from '../../components/Header/Header';
import Label from '../../components/Label/Label.jsx';
import { useEffect, useState } from 'react';
import { Div, Cell, Row, Search, Input } from '../../styles/global.js';
import { readCliente } from '../../service/api';
import TabelaClientes from '../../components/TabelaClientes/TabelaClientes.jsx';
import Load from '../../components/Load/Load.jsx';

const Clientes = () => {
  const [infos, setInfos] = useState([]);
  const [atualizarTela, setAtualizarTela] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

  async function requisicao() {
    const response = await readCliente();
    setInfos(response);
  }

  useEffect(() => {
    setTimeout(() => {
      requisicao();
      setRemoveLoading(true);
    }, 1000);
  }, []);

  function handleAtualizaTela() {
    setAtualizarTela(true);
  }

  useEffect(() => {
    if (atualizarTela === true) {
      requisicao();
      setAtualizarTela(false);
    }
  }, [atualizarTela]);

  return (
    <div style={{ textAlign: 'center' }}>
      <Header />
      <div></div>
      <Div>
        <Search>
          <Label texto="Filtrar:" />
          <Input type="text" />
        </Search>
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
        {!removeLoading && <Load />}
      </Div>
    </div>
  );
};

export default Clientes;
